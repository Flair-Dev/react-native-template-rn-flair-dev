/**
 * @format
 * @flow
 */
import theme from '../../theme';

export default {
  container: {
    marginBottom: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    textAlign: 'center',
    fontSize: 18,
    color: theme.colors.blue,
    opacity: 0.9,
    marginRight: 12,
  },
  title: theme.text.h5('blue'),
  error: {
    ...theme.text.p1('orange2'),
    position: 'absolute',
    top: null,
    bottom: -26,
  },
};
