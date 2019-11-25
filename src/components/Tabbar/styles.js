/**
 * @format
 * @flow
 */

import theme from '../../theme';
const {sizes, colors} = theme;

const icon = {
  fontSize: 24,
  color: colors.grey2,
};

export default {
  tabBarSpacer: {
    height: sizes.FULL_TAB_BAR_HEIGHT,
  },
  container: {
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    height: sizes.FULL_TAB_BAR_HEIGHT,
    paddingBottom: sizes.BOTTOM_SPACE,
    width: '100%',
    backgroundColor: colors.white,
    ...theme.shadows.modalShadow,
  },
  tabBar: {
    width: theme.sizes.WINDOW_WIDTH / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon,
  activeIcon: {
    ...icon,
    color: colors.blue,
  },
  indicator: {
    position: 'absolute',
    height: 2,
    backgroundColor: colors.blue,
    width: '33%',
  },
};
