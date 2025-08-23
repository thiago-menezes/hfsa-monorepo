import { css } from '../../../styled-system/css';

export const dialogStyles = {
  backdrop: css({
    position: 'fixed',
    inset: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'xl',
  }),
  dialog: css({
    backgroundColor: 'white',
    borderRadius: 'lg',
    padding: 'xl',
    width: '100%',
    maxWidth: '28rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  }),
  title: css({
    fontSize: 'lg',
    fontWeight: '600',
    marginBottom: 'sm',
  }),
};