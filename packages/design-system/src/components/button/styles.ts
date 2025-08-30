import { css } from '../../../styled-system/css';

export const buttonStyles = {
  base: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'medium',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    position: 'relative',
    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: 'primary.500',
      outlineOffset: '2px',
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      transform: 'none',
    },
  }),
  variants: {
    primary: css({
      backgroundColor: 'primary.500',
      color: 'white',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '&:hover:not(:disabled)': {
        backgroundColor: 'primary.600',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      '&:active:not(:disabled)': {
        transform: 'translateY(0)',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      '&:disabled': {
        backgroundColor: 'primary.400',
        color: 'primary.100',
        boxShadow: 'none',
      },
    }),
    secondary: css({
      backgroundColor: 'secondary.600',
      color: 'white',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '&:hover:not(:disabled)': {
        backgroundColor: 'secondary.700',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      '&:active:not(:disabled)': {
        transform: 'translateY(0)',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      '&:disabled': {
        backgroundColor: 'secondary.400',
        color: 'secondary.200',
        boxShadow: 'none',
      },
    }),
    ghost: css({
      backgroundColor: 'transparent',
      color: 'secondary.700',
      border: '1px solid',
      borderColor: 'secondary.300',
      '&:hover:not(:disabled)': {
        backgroundColor: 'secondary.50',
        borderColor: 'secondary.400',
        color: 'secondary.800',
      },
      '&:active:not(:disabled)': {
        backgroundColor: 'secondary.100',
      },
      '&:disabled': {
        color: 'secondary.400',
        borderColor: 'secondary.200',
        backgroundColor: 'transparent',
      },
    }),
  },
  sizes: {
    sm: css({
      height: '2rem',
      paddingX: 'sm',
      fontSize: 'sm',
      gap: 'xs',
    }),
    md: css({
      height: '2.5rem',
      paddingX: 'md',
      fontSize: 'md',
      gap: 'sm',
    }),
    lg: css({
      height: '3rem',
      paddingX: 'lg',
      fontSize: 'lg',
      gap: 'md',
    }),
  },
  iconOnly: css({
    width: '2.5rem',
    padding: '0',
    '&.sm': {
      width: '2rem',
    },
    '&.lg': {
      width: '3rem',
    },
  }),
};
