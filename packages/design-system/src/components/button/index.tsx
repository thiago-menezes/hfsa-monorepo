import { clsx } from 'clsx';
import { ButtonProps } from './types';
import styles from './styles.module.css';

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
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        isIconOnly && styles['button--icon-only'],
        className,
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && !isIconOnly && (
        <span
          className={clsx(styles.button__icon, styles['button__icon--left'])}
        >
          {icon}
        </span>
      )}

      {children && <span className={styles.button__content}>{children}</span>}

      {icon && iconPosition === 'right' && !isIconOnly && (
        <span
          className={clsx(styles.button__icon, styles['button__icon--right'])}
        >
          {icon}
        </span>
      )}

      {icon && isIconOnly && (
        <span className={styles.button__icon}>{icon}</span>
      )}
    </button>
  );
};
