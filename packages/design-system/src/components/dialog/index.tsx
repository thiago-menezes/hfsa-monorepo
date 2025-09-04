'use client';
import { DialogProps } from './types';
import styles from './styles.module.css';

export const Dialog = ({ open, onClose, title, children }: DialogProps) => {
  if (!open) return null;
  return (
    <div className={styles.dialog__backdrop} onClick={onClose}>
      <div
        className={styles.dialog__content}
        onClick={(e) => e.stopPropagation()}
      >
        {title ? <h2 className={styles.dialog__title}>{title}</h2> : null}
        {children}
      </div>
    </div>
  );
};
