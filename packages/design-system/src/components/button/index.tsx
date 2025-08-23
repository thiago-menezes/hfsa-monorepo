import { clsx } from 'clsx';
import styles from './styles.module.css';
import { ButtonProps } from './types';

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.base,
        styles[variant],
        styles[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
