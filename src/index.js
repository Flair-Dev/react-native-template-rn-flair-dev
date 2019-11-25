/**
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {configureStore} from './redux/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './locales';
import {Provider} from 'react-redux';
import AppNavigator from './navigation';
import NavigationService from './services/Navigation';
import AlertsService from './services/Alerts';
import actions from './redux/actions';
import GlobalLoading from './components/GlobalLoading';
import Alert from './components/Alert';

const {width} = Dimensions.get('window');

export const store = configureStore(() => {
  store.dispatch(actions.appLoaded());
});

const globalScreens = [
  <AppNavigator
    ref={nav => NavigationService.setNavigator(nav)}
  />,
];

const renderGlobalScreen = ({item}) => {
  return <View style={{width}}>{item}</View>;
};

const App = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  NavigationService.initSetEnableScroll(setScrollEnabled);
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <FlatList
          bounces={false}
          scrollEnabled={scrollEnabled}
          keyboardDismissMode="on-drag"
          initialNumToRender={1}
          windowSize={1}
          horizontal
          pagingEnabled
          data={globalScreens}
          renderItem={renderGlobalScreen}
          keyExtractor={(item, index) => index.toString()}
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          ref={ref => NavigationService.setHorizontalNavigator(ref)}
          showsHorizontalScrollIndicator={false}
        />
        <GlobalLoading />
        <Alert ref={ref => AlertsService.init(ref)} />
      </I18nextProvider>
    </Provider>
  );
};

export default App;
