/**
 * @format
 * @flow
 */

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import theme from '../theme';
import SignIn from '../screens/SignIn';

const AppStack = createStackNavigator(
  {
    Profile: () => null
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureResponseDistance: {horizontal: theme.sizes.WINDOW_WIDTH / 2},
    },
  },
);

const AppNavigator = createSwitchNavigator({
  Loading: () => null,
  SignIn,
  App: AppStack,
});

export default createAppContainer(AppNavigator);
