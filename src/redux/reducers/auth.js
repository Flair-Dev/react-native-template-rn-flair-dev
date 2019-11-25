/**
 * @format
 * @flow
 */

import {handleActions} from 'redux-actions';
import actions from '../actions';

type StateProps = {
  user: Object | null,
  token: string | null,
};

export const initialState: StateProps = {
  user: null,
  token: null,
};

const signIn = {
  [actions.signIn.success]: (state, {payload: {data}}) => ({
    ...state,
    user: data.user_details,
    token: data.access_token,
  }),
};

const logout = {
  [actions.logout]: () => initialState,
};

export default handleActions(
  {
    ...signIn,
    ...keepSignIn,
    ...logout,
  },
  initialState,
);
