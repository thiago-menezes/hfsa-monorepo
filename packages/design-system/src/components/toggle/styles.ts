import { css } from '../../../styled-system/css';

export const toggleStyles = {
  wrapper: css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'sm',
    cursor: 'pointer',
    userSelect: 'none',
  }),
  label: css({
    fontSize: 'sm',
    color: 'secondary.800',
  }),
  switch: css({
    position: 'relative',
    width: '2.5rem',
    height: '1.5rem',
    borderRadius: 'full',
    backgroundColor: 'secondary.300',
    transition: 'background-color 0.2s ease-in-out',
    flexShrink: 0,
  }),
  switchChecked: css({
    backgroundColor: 'primary.500',
  }),
  switchFocus: css({
    outline: '2px solid',
    outlineColor: 'primary.500',
    outlineOffset: '2px',
  }),
  switchDisabled: css({
    opacity: 0.6,
    cursor: 'not-allowed',
  }),
  thumb: css({
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: 'full',
    backgroundColor: 'white',
    boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
    transition: 'transform 0.2s ease-in-out',
  }),
  thumbChecked: css({
    transform: 'translateX(1rem)',
  }),
  input: css({
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    margin: 0,
    opacity: 0,
    cursor: 'pointer',
  }),
};
