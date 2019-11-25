import {Platform} from 'react-native';
import colors from './colors';
import text from './text';
import sizes from './sizes';

const shadows = {
  modalShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  smallShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
};

export default {
  colors: colors.colors,
  getColor: colors.getColor,
  text,
  sizes,
  shadows,
  isIOS: Platform.OS === 'ios',
};
