import {spawn} from 'redux-saga/effects';
import authSaga from './auth';
import commonSaga from './common';

export default function*() {
  yield spawn(authSaga);
  yield spawn(commonSaga);
}
