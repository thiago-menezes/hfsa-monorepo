import { clsx } from 'clsx';
import { ButtonProps } from './types';
import { buttonStyles } from './styles';

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        buttonStyles.base,
        buttonStyles.variants[variant],
        buttonStyles.sizes[size],
        props.className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
