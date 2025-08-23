import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg' | 'icon';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};
