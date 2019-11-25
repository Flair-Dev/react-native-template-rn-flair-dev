/**
 * @format
 * @flow
 */
import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default {
  container: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
    backgroundColor: theme.colors.rgba.black(0.3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingWrapper: {
    width: 160,
    height: 140,
    backgroundColor: theme.colors.rgba.black(0.7),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
