import {spost, sget} from './helpers';

const queryString = require('query-string');

const BASE_API = '';

export default {
  signIn: async body => {
    const route = '/auth/';
    const url = `${BASE_API}${route}`;
    return await spost({
      url,
      body,
    });
  },
  signUp: async body => {
    const route = '/v1/users/';
    const url = `${BASE_API}${route}`;
    return await spost({
      url,
      body,
    });
  },
};
