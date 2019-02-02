import { Platform, Dimensions, PixelRatio } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const getPixelSizeForLayoutSize = (dp) => {
  return PixelRatio.getPixelSizeForLayoutSize(dp);
};

const unitDp = 16;
const unitPx = getPixelSizeForLayoutSize(unitDp);

const gap = {
  xxs: unitDp / 8, 
  xs: unitDp / 4,
  sm: unitDp / 2,
  md: unitDp,
  lg: unitDp * 1.5,
  xl: unitDp * 2,
  xxl: unitDp * 4,
};

const colors = {
  primary: {
    100: '#FF7A80',
    300: '#FF545C',
    500: '#f51832',
    700: '#D1262E',
    900: '#A31E24',
  },
  secundary: {
    100: '#A877F1',
    300: '#8F50ED',
    500: '#772AEA',
    700: '#6223C0',
    900: '#4C1B95',
  },
  accent: {
    100: '#EE75B7',
    300: '#E94EA3',
    500: '#E5278F',
    700: '#BC2076',
    900: '#92195C',
  },
  neutral: {
    100: '#f9f9f9',
    300: '#e1e7ec',
    500: '#cfd6de',
    700: '#b8c4ce',
    900: '#8895a6',
    1200: '#5f6b79',
    1400: '#212934',
  },
};

const input = {
  height: 44,
};

const font = {
  // family: '',
  regular: unitDp,

};

export default {
  deviceWidth,
  deviceHeight,
  containerHeight: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
  gap,
  colors,
  size: gap,
};
