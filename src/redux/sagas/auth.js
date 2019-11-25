import {call, put, takeEvery} from 'redux-saga/effects';
import {toResult} from 'redux-saga-helpers';
import NavigationService from '../../services/Navigation';
import actions from '../actions';
import API from '../../api';
import {setToken} from '../../api/helpers';
import {batchActions} from 'redux-batched-actions';

function* handleSignIn({payload}) {
  const [data, error] = yield call(toResult(API.signIn), payload);
  if (!error) {
    const actionsToBatch = [actions.signIn.success(data)];
    yield put(batchActions(actionsToBatch));
    setToken(data.data.access_token);
    NavigationService.navigate('App');
  } else {
    yield put(actions.signIn.error(error));
  }
}

function* handleSignUp({payload}) {
  const [response, error] = yield call(toResult(API.signUp), payload);
  if (!error) {
    const {data} = response;
    yield put(actions.signUp.success(response));
    setToken(data.access_token);
    NavigationService.navigate('App');
  } else {
    yield put(actions.signUp.error(error));
  }
}

function* handleLogout() {
  NavigationService.navigate('SignIn');
}

export default function*() {
  yield takeEvery(actions.signIn.request, handleSignIn);
  yield takeEvery(actions.signUp.request, handleSignUp);

  yield takeEvery(actions.logout, handleLogout);
}
