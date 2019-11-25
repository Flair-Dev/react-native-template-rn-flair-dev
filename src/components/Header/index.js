/**
 * @format
 * @flow
 */

import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PIcon from '../../utils/icon';
import styles from './styles';
import T from '../T';

type Props = {
  title?: string | React.Node,
  left?: React.Node,
  right?: React.Node,
  onLeftPress?: Function,
  onRightPress?: Function,
  height?: number,
};

const Header = ({
  title,
  left,
  right,
  onLeftPress,
  onRightPress,
  height,
}: Props) => {
  return (
    <View style={[styles.container, {height}]}>
      <TouchableOpacity style={styles.leftView} onPress={onLeftPress}>
        {left}
      </TouchableOpacity>
      <View style={styles.centerView}>
        {typeof title === 'string' ? (
          <T text={title} style={styles.title} numberOfLines={1} />
        ) : (
          title
        )}
      </View>
      <TouchableOpacity style={styles.rightView} onPress={onRightPress}>
        {right}
      </TouchableOpacity>
    </View>
  );
};

Header.defaultProps = {
  height: styles.container.height,
};

export const HeaderStyles = styles;

type IconProps = {
  name: string,
  color?: string,
};

export const Icon = ({name, color}: IconProps) => {
  return <PIcon name={name} style={[styles.icon, color && {color}]} />;
};

export default Header;
