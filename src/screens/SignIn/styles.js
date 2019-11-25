/**
 * @format
 * @flow
 */

import theme from '../../theme';

const text = {
  ...theme.text.p1('white', 0.7),
};

export default {
  text,
  hitSlop: theme.sizes.HIT_SLOP,
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.blue,
  },
  container: {
    paddingHorizontal: 24,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topWrapper: {
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 380,
  },
  input: {
    marginVertical: 16,
  },
  appLogo: {
    height: 64,
  },
  prometeonLogo: {
    position: 'absolute',
    bottom: 8,
    height: 24,
  },
  switchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
    right: 8,
  },
  switchContainer: {
    width: 46,
    height: 28,
    borderRadius: 25,
    backgroundColor: theme.colors.blue,
    padding: 5,
    marginRight: 12,
  },
  switchCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
  },
  boldText: {
    ...theme.text.b1('white'),
  },
  forgotWrapper: {
    marginVertical: 20,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginRight: 12,
  },
  checkboxIcon: {
    color: theme.colors.white,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
  },
};
