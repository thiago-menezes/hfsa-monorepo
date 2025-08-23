import { css } from '../../../styled-system/css';

export const inputStyles = {
  wrapper: css({
    display: 'grid',
    gap: 'xs',
  }),
  label: css({
    fontSize: 'sm',
    color: 'secondary.700',
  }),
  input: css({
    border: '1px solid',
    borderColor: 'secondary.300',
    borderRadius: 'md',
    padding: 'sm md',
    outline: 'none',
    transition: 'all 0.2s',
    '&:focus': {
      borderColor: 'primary.500',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.1)',
    },
    '&:disabled': {
      backgroundColor: 'secondary.50',
      color: 'secondary.500',
      cursor: 'not-allowed',
    },
  }),
};