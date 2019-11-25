/**
 * @format
 * @flow
 */

import {createSelector} from 'reselect';

const selectAuthReducer = (state: Object) => state && state.auth;

const selectToken = createSelector(
  selectAuthReducer,
  reducer => reducer.token,
);

const selectUser = createSelector(
  selectAuthReducer,
  reducer => reducer.user,
);

export {selectUser, selectToken};
