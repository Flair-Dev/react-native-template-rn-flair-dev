import {StatusBar} from 'react-native';
import {select, takeEvery} from 'redux-saga/effects';
import NavigationService from '../../services/Navigation';
import BluetoothService from '../../services/Bluetooth';
import actions from '../actions';
import {selectCSRF, selectToken} from '../selectors/auth';
import {setCSRF, setToken} from '../../api/helpers';
import theme from '../../theme';
import SplashScreen from 'react-native-splash-screen';

function* handleAppState() {
  if (!theme.isIOS) {
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }
  StatusBar.setBarStyle('light-content');
  const token = yield select(selectToken);
  const csrf = yield select(selectCSRF);
  let route = 'SignIn';
  if (token) {
    route = 'App';
    setToken(token);
  }
  if (csrf) {
    setCSRF(csrf);
  }
  BluetoothService.init();
  NavigationService.navigate(route);
  SplashScreen.hide();
}

export default function*() {
  yield takeEvery(actions.appLoaded, handleAppState);
}
