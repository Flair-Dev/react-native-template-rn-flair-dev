/**
 * @format
 * @flow
 */

import {combineReducers} from 'redux';

import auth from './auth';
import loadings from './loadings';
import errors from './errors';

export default combineReducers({
  auth,
  loadings,
  errors,
});
