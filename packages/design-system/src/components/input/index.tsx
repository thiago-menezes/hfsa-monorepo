import styles from './styles.module.css';
import { InputProps } from './types';

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <label className={styles.wrapper}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <input className={styles.input} {...props} />
    </label>
  );
};
