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
    // backgroundColor: theme.colors.rgba.black(0.3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFill,
    zIndex: 0,
    backgroundColor: theme.colors.rgba.black(0.3),
  },
  alertWrapper: {
    width: '90%',
    // height: 140,
    backgroundColor: theme.getColor('white'),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    ...theme.text.p1(),
  },
  buttonsWrapper: {
    width: 300,
    flexDirection: 'row',
    marginTop: 28,
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 72,
    color: theme.getColor('blue', 0.2),
    marginBottom: 24,
  },
};
