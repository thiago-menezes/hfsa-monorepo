import { clsx } from 'clsx';
import { HeadingProps } from './types';
import styles from './styles.module.css';

export const Heading = ({
  as = 'h1',
  weight = 'semibold',
  children,
  className,
  ...props
}: HeadingProps) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        styles.heading,
        styles[`heading--${as}`],
        styles[`heading--${weight}`],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
