import styles from './styles.module.css';
import { SelectProps } from './types';

export const Select = ({ label, children, ...props }: SelectProps) => {
  return (
    <label className={styles.select__wrapper}>
      {label ? <span className={styles.select__label}>{label}</span> : null}
      <select className={styles.select__field} {...props}>
        {children}
      </select>
    </label>
  );
};
