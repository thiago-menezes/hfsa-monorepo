import { InputHTMLAttributes, ReactNode } from 'react';

export type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: ReactNode;
};

