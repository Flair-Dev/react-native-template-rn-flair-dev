let token;

const REQUEST_TIMEOUT = 13000; // = 13 seconds
const NETWORK_ERROR = {status: 0, message: 'Network request failed'};
const defaultStatuses = {
  404: 'Page Not Found',
  500: 'Internal Server Error',
};

export const setToken = (value: string) => {
  token = value;
};

export const parseResult = async (response: Object) => {
  let result;
  try {
    result = await response.json();
  } catch (e) {
    const {status} = response;
    const error = {status};
    error.message = defaultStatuses[status] || 'Unknown Error';
    throw error;
  }

  if (!response.ok) {
    const error = {...result};
    error.status = response.status;
    throw error;
  }

  return result;
};

export const sfetch = async ({
  method,
  url,
  body,
}: {
  method: 'GET' | 'POST',
  url: string,
  body: ?Object,
}) => {
  const headers: {[key: string]: string} = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const request: {[key: string]: any} = {
    method,
    headers,
    credentials: 'include',
  };
  if (body) {
    request.body = JSON.stringify(body);
  }

  return Promise.race([
    fetch(url, request).catch(() => {
      throw NETWORK_ERROR;
    }),
    new Promise((_, reject) =>
      setTimeout(() => reject(NETWORK_ERROR), REQUEST_TIMEOUT),
    ),
  ]);
};

export const sget = ({url}: {url: string}) =>
  sfetch({method: 'GET', url, body: null}).then(parseResult);
export const spost = ({url, body}: {url: string, body: Object}) =>
  sfetch({method: 'POST', url, body}).then(parseResult);
export const sdelete = ({url, body}: {url: string, body: Object}) =>
  sfetch({method: 'DELETE', url, body}).then(parseResult);
