import {Platform} from 'react-native';
import colors from './colors';

const isIOS = Platform.OS === 'ios';

const fontFamily = Platform.select({
  ios: {
    regular: 'Calibri',
    bold: 'Calibri-Bold',
    light: 'Calibri-Light',
  },
  android: {
    regular: 'Calibri Regular',
    bold: 'Calibri Bold',
    light: 'Calibri Light',
  },
});

const topA = isIOS ? 3 : 0;
const topB = isIOS ? 2.5 : 0;
const topC = isIOS ? 4 : 0;

export default {
  b1: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 16,
    top: topA,
    color: colors.getColor(color, opacity),
  }),
  b2: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 12,
    top: topA,
    color: colors.getColor(color, opacity),
  }),
  h1: (color, opacity) => ({
    fontFamily: fontFamily.regular,
    fontSize: 22,
    top: topA,
    color: colors.getColor(color, opacity),
  }),
  h2: (color, opacity) => ({
    fontFamily: fontFamily.regular,
    fontSize: 20,
    top: topA,
    color: colors.getColor(color, opacity),
  }),
  h3: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 22,
    top: topA,
    color: colors.getColor(color, opacity),
  }),
  h4: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 20,
    top: topA,
    color: colors.getColor(color, opacity),
  }),
  h5: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 18,
    top: topC,
    color: colors.getColor(color, opacity),
  }),
  l1: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 14,
    top: topB,
    color: colors.getColor(color, opacity),
  }),
  p1: (color, opacity) => ({
    fontFamily: fontFamily.regular,
    fontSize: 16,
    top: topA,
    color: colors.getColor(color, opacity),
  }),
};
