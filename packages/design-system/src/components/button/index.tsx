import { clsx } from 'clsx';
import { styles } from './styles';
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
        styles.variants[variant],
        styles.sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
