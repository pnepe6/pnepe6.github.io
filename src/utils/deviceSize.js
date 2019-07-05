const size = {
  xxs: '320px', // mobile
  xs: '375px', // mobile
  s: '425px', // mobile
  m: '768px', // tablet
  l: '1024px', // desktop
  xl: '1440px', // desktop
  xxl: '2560px' // desktop
}

export const device = {
  xxs: `(min-width: ${size.xxs})`,
  xs: `(min-width: ${size.xs})`,
  s: `(min-width: ${size.s})`,
  m: `(min-width: ${size.m})`,
  l: `(min-width: ${size.l})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};