import styles from './styles.module.css';
import { InputProps } from './types';

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <label className={styles.input__wrapper}>
      {label ? <span className={styles.input__label}>{label}</span> : null}
      <input className={styles.input__field} {...props} />
    </label>
  );
};
