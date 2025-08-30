import { clsx } from 'clsx';
import { ButtonProps } from './types';
import { buttonStyles } from './styles';

export const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className,
  ...props
}: ButtonProps) => {
  const isIconOnly = iconPosition === 'only' || (!children && icon);
  
  return (
    <button
      className={clsx(
        buttonStyles.base,
        buttonStyles.variants[variant],
        buttonStyles.sizes[size],
        isIconOnly && buttonStyles.iconOnly,
        isIconOnly && `${buttonStyles.iconOnly}.${size}`,
        className,
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && !isIconOnly && (
        <span className="button-icon-left">{icon}</span>
      )}
      
      {children && (
        <span className="button-content">{children}</span>
      )}
      
      {icon && iconPosition === 'right' && !isIconOnly && (
        <span className="button-icon-right">{icon}</span>
      )}
      
      {icon && isIconOnly && (
        <span className="button-icon-only">{icon}</span>
      )}
    </button>
  );
};
