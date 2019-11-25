/**
 * @format
 * @flow
 */

import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationEvents, NavigationScreenProps} from 'react-navigation';

type Props = NavigationScreenProps & {};

const darkBarStyle = [
  'SignIn',
];

export default function withStatusBar(Screen: React.ComponentType<Props>) {
  class ComponentWithStatusBar extends React.PureComponent<Props> {
    onFocus = () => {
      const {routeName} = this.props.navigation.state;
      StatusBar.setBarStyle(
        darkBarStyle.includes(routeName) ? 'dark-content' : 'light-content',
      );
    };

    render() {
      return (
        <>
          <NavigationEvents onWillFocus={this.onFocus} />
          <Screen {...this.props} />
        </>
      );
    }
  }
  return ComponentWithStatusBar;
}
