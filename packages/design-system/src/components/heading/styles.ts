import { css } from '../../../styled-system/css';

export const headingStyles = {
  base: css({
    fontFamily: 'Inter, system-ui, sans-serif',
    lineHeight: 'tight',
    color: 'secondary.900',
    margin: '0',
  }),
  sizes: {
    h1: css({
      fontSize: '3xl',
      lineHeight: '1.1',
    }),
    h2: css({
      fontSize: '2xl',
      lineHeight: '1.2',
    }),
    h3: css({
      fontSize: 'xl',
      lineHeight: '1.3',
    }),
    h4: css({
      fontSize: 'lg',
      lineHeight: '1.4',
    }),
    h5: css({
      fontSize: 'md',
      lineHeight: '1.5',
    }),
    h6: css({
      fontSize: 'sm',
      lineHeight: '1.6',
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
};
