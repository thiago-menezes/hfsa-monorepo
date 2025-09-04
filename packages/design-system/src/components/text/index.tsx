import { clsx } from 'clsx';

import styles from './styles.module.css';
import { TextProps } from './types';

export const Text = ({
  as = 'p',
  size = 'md',
  weight = 'normal',
  color = 'black',
  children,
  className,
  ...props
}: TextProps) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        styles.text,
        styles[`text--${size}`],
        styles[`text--${weight}`],
        styles[`text--${color}`],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
