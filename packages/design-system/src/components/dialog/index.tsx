'use client';
import { DialogProps } from './types';
import { dialogStyles } from './styles';

export const Dialog = ({ open, onClose, title, children }: DialogProps) => {
  if (!open) return null;
  return (
    <div className={dialogStyles.backdrop} onClick={onClose}>
      <div className={dialogStyles.dialog} onClick={(e) => e.stopPropagation()}>
        {title ? <h2 className={dialogStyles.title}>{title}</h2> : null}
        {children}
      </div>
    </div>
  );
};
