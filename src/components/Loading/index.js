/**
 * @format
 * @flow
 */

import React from 'react';
import styles from './styles';
import {MaterialIndicator} from 'react-native-indicators';

type Props = {
  type: 'light' | 'dark',
  size: number,
};

const typeColors = {
  light: styles.colors.white,
  dark: styles.colors.blue,
};

const Loading = ({type, size}: Props) => {
  return <MaterialIndicator color={typeColors[type]} size={size} />;
};

Loading.defaultProps = {
  type: 'dark',
  size: 20,
};

export default Loading;
