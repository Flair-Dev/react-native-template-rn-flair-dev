const colors = {
  blue: '#212b59',
  grey: '#878787',
  black: '#000000',
  white: '#FFFFFF',
  grey1: '#4a4949',
  grey2: '#dadad9',
  grey3: '#f2f2f2',
  cyan1: '#37506d',
  cyan2: '#4081b3',
  cyan3: '#6795Ca',
  green1: '#3d5a3d',
  green2: '#3f8255',
  green3: '#72a36c',
  yellow1: '#b69952',
  yellow2: '#dfb256',
  yellow3: '#eec666',
  orange1: '#8c3d35',
  orange2: '#c6453a',
  orange3: '#ca5347',
  header: '#F2F4FB',
  background: '#F9FAFC',
  lightGrey: '#979797',
  rgba: {
    blue: (opacity: number) => `rgba(33, 43, 89, ${opacity})`,
    white: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    grey: (opacity: number) => `rgba(135, 135, 135, ${opacity})`,
    black: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    grey1: (opacity: number) => `rgba(74, 74, 74, ${opacity})`,
    grey2: (opacity: number) => `rgba(218, 218, 218, ${opacity})`,
    grey3: (opacity: number) => `rgba(242, 242, 242, ${opacity})`,
    cyan1: (opacity: number) => `rgba(55, 80, 109, ${opacity})`,
    cyan2: (opacity: number) => `rgba(64, 129, 179, ${opacity})`,
    cyan3: (opacity: number) => `rgba(103, 149, 202, ${opacity})`,
    green1: (opacity: number) => `rgba(61, 90, 61, ${opacity})`,
    green2: (opacity: number) => `rgba(63, 131, 86, ${opacity})`,
    green3: (opacity: number) => `rgba(114, 163, 108, ${opacity})`,
    yellow1: (opacity: number) => `rgba(182, 153, 82, ${opacity})`,
    yellow2: (opacity: number) => `rgba(223, 178, 86, ${opacity})`,
    yellow3: (opacity: number) => `rgba(238, 198, 102, ${opacity})`,
    orange1: (opacity: number) => `rgba(140, 61, 53, ${opacity})`,
    orange2: (opacity: number) => `rgba(198, 70, 58, ${opacity})`,
    orange3: (opacity: number) => `rgba(202, 83, 71, ${opacity})`,
  },
};

const getColor = (color: string = 'blue', opacity?: number = 1) => {
  return colors.rgba[color]
    ? colors.rgba[color](opacity)
    : colors[color] || color;
};

export default {colors, getColor};
