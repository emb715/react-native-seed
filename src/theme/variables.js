import { Platform, Dimensions, PixelRatio } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const getPixelSizeForLayoutSize = (dp) => {
  return PixelRatio.getPixelSizeForLayoutSize(dp);
};

const unitDp = 16;
const unitPx = getPixelSizeForLayoutSize(unitDp);

const gap = {
  xs: unitDp / 4,
  sm: unitDp / 2,
  md: unitDp,
  lg: unitDp * 1.5,
  xl: unitDp * 2,
};

const colors = {
  primary: '',
  secundary: '',
  tertiary: '',
  accent: '',
  accentVariant: '',
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

export default {
  deviceWidth,
  deviceHeight,
  containerHeight: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
  gap,
  colors,
};
