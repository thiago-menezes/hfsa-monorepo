import { HTMLAttributes } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'inherit';

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: 'p' | 'span' | 'div';
  size?: Size;
  weight?: Weight;
  color?: Color;
  children: React.ReactNode;
};
