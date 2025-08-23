import { css } from '../../../styled-system/css';

export const buttonStyles = {
  base: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'medium',
    transition: 'colors',
    cursor: 'pointer',
    border: 'none',
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  }),
  variants: {
    primary: css({
      backgroundColor: 'primary.500',
      color: 'white',
      '&:hover:not(:disabled)': {
        backgroundColor: 'primary.600',
      },
    }),
    secondary: css({
      backgroundColor: 'secondary.100',
      color: 'secondary.900',
      '&:hover:not(:disabled)': {
        backgroundColor: 'secondary.200',
      },
    }),
    ghost: css({
      backgroundColor: 'transparent',
      color: 'primary.500',
      '&:hover:not(:disabled)': {
        backgroundColor: 'primary.50',
      },
    }),
  },
  sizes: {
    sm: css({
      height: '2rem',
      paddingX: 'sm',
      fontSize: 'sm',
    }),
    md: css({
      height: '2.5rem',
      paddingX: 'md',
      fontSize: 'md',
    }),
    lg: css({
      height: '3rem',
      paddingX: 'lg',
      fontSize: 'lg',
    }),
  },
};
