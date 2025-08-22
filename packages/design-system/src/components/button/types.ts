import { ButtonHTMLAttributes } from 'react';
import { styles } from './styles';

type Variant = keyof typeof styles.variants;
type Size = keyof typeof styles.sizes;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};
