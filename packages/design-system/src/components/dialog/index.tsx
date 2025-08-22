'use client';
import * as styles from './styles';
import { DialogProps } from './types';

export const Dialog = ({ open, onClose, title, children }: DialogProps) => {
  if (!open) return null;
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        {title ? <h2 className="text-lg font-semibold mb-2">{title}</h2> : null}
        {children}
      </div>
    </div>
  );
};
