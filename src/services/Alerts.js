/**
 * @format
 * @flow
 */

let alerts;

function init(ref: any) {
  alerts = ref;
}

function show(options: Object) {
  return new Promise<boolean>((resolve, reject) => {
    if (alerts) {
      alerts.show(options, resolve);
    } else {
      reject('No Alert Component');
    }
  });
}

export default {
  init,
  show,
};
