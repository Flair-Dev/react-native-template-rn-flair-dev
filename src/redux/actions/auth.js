import {createActionsSet} from './helpers';
import {createAction} from 'redux-actions';

export default {
  signIn: createActionsSet('SIGN_IN'),
  signUp: createActionsSet('SIGN_UP'),

  logout: createAction('LOGOUT'),
};
