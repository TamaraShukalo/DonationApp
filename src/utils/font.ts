import {COLORS} from '../constants/colors';
import {FONTS, FontFamily, FontWeight} from '../constants/fonts';

export const font = (
  fontSize: number,
  lineHeight?: number | null,
  fontWeight: FontWeight = 'regular',
  color: keyof typeof COLORS = 'black',
  fontFamily: FontFamily = 'primary',
) => {
  return {
    fontSize,
    lineHeight: lineHeight != null ? lineHeight : undefined,
    fontFamily: FONTS[fontFamily][fontWeight],
    color: COLORS[color],
  };
};
