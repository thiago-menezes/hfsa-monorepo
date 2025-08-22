import * as styles from './styles';
import { SelectProps } from './types';

export const Select = ({ label, children, ...props }: SelectProps) => {
  return (
    <label className={styles.wrapper}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <select className={styles.select} {...props}>
        {children}
      </select>
    </label>
  );
};
