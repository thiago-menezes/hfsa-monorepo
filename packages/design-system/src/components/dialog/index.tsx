'use client';
import styles from './styles.module.css';
import { DialogProps } from './types';

export const Dialog = ({ open, onClose, title, children }: DialogProps) => {
  if (!open) return null;
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        {children}
      </div>
    </div>
  );
};
