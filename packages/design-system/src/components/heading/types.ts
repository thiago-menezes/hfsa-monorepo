import { HTMLAttributes } from 'react';

type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: Size;
  weight?: Weight;
  children: React.ReactNode;
};
