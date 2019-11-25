/**
 * @format
 * @flow
 */

import theme from '../../theme';
import colors from '../../theme/colors';

const container = {
  backgroundColor: colors.getColor('white'),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
};

const text = {
  ...theme.text.b1('blue'),
};

const iconWrapper = {
  width: 18,
  height: 18,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 8,
};

export default {
  darkBtnContainer: {
    ...container,
    backgroundColor: colors.getColor('blue'),
  },
  darkBtnText: {
    ...text,
    color: colors.getColor('white'),
  },
  lightBtnContainer: {
    ...container,
    backgroundColor: colors.getColor('white'),
  },
  yellowBtnContainer: {
    ...container,
    backgroundColor: colors.getColor('yellow2'),
  },
  redBtnContainer: {
    ...container,
    backgroundColor: colors.getColor('orange2'),
  },
  cyanBtnContainer: {
    ...container,
    backgroundColor: colors.getColor('cyan2'),
  },
  greenBtnContainer: {
    ...container,
    backgroundColor: colors.getColor('green2'),
  },
  light_blueBtnContainer: {
    ...container,
    backgroundColor: colors.getColor('blue', 0.08),
  },
  greyBtnContainer: {
    ...container,
    backgroundColor: colors.getColor('grey2'),
  },
  disabledBtnContainer: {
    ...container,
    backgroundColor: colors.getColor('blue', 0.3),
  },
  lightBtnText: {
    ...text,
    color: theme.colors.blue,
  },
  iconWrapper,
  iconBackground: {
    ...iconWrapper,
    borderRadius: 9,
    backgroundColor: theme.colors.white,
  },
  icon: {
    fontSize: 15,
    width: 20,
    textAlign: 'center',
  },
};
