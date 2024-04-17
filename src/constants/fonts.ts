export type FontWeight = keyof typeof FONT_WEIGHTS;

export const FONT_WEIGHTS = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
} as const;

export type FontFamily = 'primary';

export const FONTS: {[font in FontFamily]: {[weight in FontWeight]: string}} = {
  primary: {
    thin: 'Inter-Thin', // 100
    extraLight: 'Inter-ExtraLight', // 200
    light: 'Inter-Light', // 300
    regular: 'Inter-Regular', // 400
    medium: 'Inter-Medium', // 500
    semiBold: 'Inter-SemiBold', // 600
    bold: 'Inter-Bold', // 700
    extraBold: 'Inter-ExtraBold', // 800
    black: 'Inter-Black', // 900
  },
};
