/**
 * @format
 * @flow
 */

import theme from '../../theme';
const {sizes, colors} = theme;

const sideView = {
  top: sizes.STATUS_BAR_HEIGHT,
  position: 'absolute',
  width: '15%',
  height: sizes.HEADER_HEIGHT,
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  container: {
    height: sizes.FULL_HEADER_HEIGHT,
    paddingTop: sizes.STATUS_BAR_HEIGHT,
    width: '100%',
    backgroundColor: colors.header,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey2,
  },
  centerView: {
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    ...theme.text.h4('blue'),
  },
  leftView: {
    ...sideView,
  },
  rightView: {
    ...sideView,
    right: 0,
  },
  icon: {
    fontSize: 24,
    color: colors.blue,
  },
};
