import { clsx } from 'clsx';
import { HeadingProps } from './types';
import { headingStyles } from './styles';

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
        headingStyles.base,
        headingStyles.sizes[as],
        headingStyles.weights[weight],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
