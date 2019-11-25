import authActions from './auth';
import commonActions from './common';
import customersActions from './customers';
import offlineActions from './offline';
import bluetoothActions from './bluetooth';

export default {
  ...authActions,
  ...commonActions,
  ...customersActions,
  ...offlineActions,
  ...bluetoothActions,
};
