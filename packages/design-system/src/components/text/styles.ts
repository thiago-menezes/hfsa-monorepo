import { css } from '../../../styled-system/css';

export const textStyles = {
  base: css({
    fontFamily: 'Inter, system-ui, sans-serif',
    lineHeight: 'relaxed',
    margin: '0',
  }),
  sizes: {
    xs: css({
      fontSize: 'xs',
      lineHeight: '1.5',
    }),
    sm: css({
      fontSize: 'sm',
      lineHeight: '1.6',
    }),
    md: css({
      fontSize: 'md',
      lineHeight: '1.7',
    }),
    lg: css({
      fontSize: 'lg',
      lineHeight: '1.6',
    }),
    xl: css({
      fontSize: 'xl',
      lineHeight: '1.5',
    }),
  },
  weights: {
    light: css({
      fontWeight: '300',
    }),
    normal: css({
      fontWeight: '400',
    }),
    medium: css({
      fontWeight: '500',
    }),
    semibold: css({
      fontWeight: '600',
    }),
    bold: css({
      fontWeight: '700',
    }),
  },
  colors: {
    primary: css({
      color: 'primary.600',
    }),
    secondary: css({
      color: 'secondary.700',
    }),
    success: css({
      color: 'success',
    }),
    warning: css({
      color: 'warning',
    }),
    error: css({
      color: 'error',
    }),
    inherit: css({
      color: 'inherit',
    }),
  },
};
