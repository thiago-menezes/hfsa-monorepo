import { PropsWithChildren } from 'react';

export type DialogProps = PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  title?: string;
}>;
