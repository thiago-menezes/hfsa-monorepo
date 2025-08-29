import { clsx } from 'clsx';
import { TextProps } from './types';
import { textStyles } from './styles';

export const Text = ({
  as = 'p',
  size = 'md',
  weight = 'normal',
  color = 'secondary',
  children,
  className,
  ...props
}: TextProps) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        textStyles.base,
        textStyles.sizes[size],
        textStyles.weights[weight],
        textStyles.colors[color],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
