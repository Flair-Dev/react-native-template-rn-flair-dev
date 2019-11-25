/**
 * @format
 * @flow
 */

import * as React from 'react';
import {Animated as RAnimated, View, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from '../../utils/icon';
import styles from './styles';
import modalStyles from '../SearchModal/styles';
import {NavigationTabProp} from 'react-navigation-tabs';

const {Value, interpolate} = Animated;
const {snapPoints} = modalStyles;

type Props = NavigationTabProp & {};

export const tabBarTranslation = new Value(1);

const point = 1 - snapPoints[1] / snapPoints[0];

const translateY = interpolate(tabBarTranslation, {
  inputRange: [0, point, point + 0.2, 1],
  outputRange: [
    styles.container.height,
    styles.container.height,
    styles.container.height,
    0,
  ],
});

class TabBar extends React.PureComponent<Props> {
  indicatorTranslateX = new RAnimated.Value(0);

  componentWillUnmount(): * {
    tabBarTranslation.setValue(1);
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props): * {
    const {index: nextIndex} = nextProps.navigation.state;
    const {index} = this.props.navigation.state;
    if (index !== nextIndex) {
      const nextValue = styles.tabBar.width * nextIndex;
      RAnimated.spring(this.indicatorTranslateX, {
        toValue: nextValue,
        useNativeDriver: true,
      }).start();
    }
  }

  renderTab = (_: any, index: Object) => {
    const {navigation, onTabPress} = this.props;
    const route = navigation.state.routes[index];
    const {routeName} = route;
    const isActive = navigation.state.index === index;
    return (
      <TouchableOpacity
        key={routeName}
        style={styles.tabBar}
        onPress={() => onTabPress({route})}>
        <Icon
          name='user'
          style={isActive ? styles.activeIcon : styles.icon}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const {routes} = this.props.navigation.state;
    return (
      <Animated.View style={[styles.container, {transform: [{translateY}]}]}>
        <RAnimated.View
          style={[
            styles.indicator,
            {transform: [{translateX: this.indicatorTranslateX}]},
          ]}
        />
        {routes.map(this.renderTab)}
      </Animated.View>
    );
  }
}

export const TabBarSpacer = () => <View style={[styles.tabBarSpacer]} />;

export default TabBar;
