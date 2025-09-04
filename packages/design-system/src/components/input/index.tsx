import { InputProps } from './types';
import styles from './styles.module.css';

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <label className={styles.input__wrapper}>
      {label ? <span className={styles.input__label}>{label}</span> : null}
      <input className={styles.input__field} {...props} />
    </label>
  );
};
