import { SelectProps } from './types';
import { selectStyles } from './styles';

export const Select = ({ label, children, ...props }: SelectProps) => {
  return (
    <label className={selectStyles.wrapper}>
      {label ? <span className={selectStyles.label}>{label}</span> : null}
      <select className={selectStyles.select} {...props}>
        {children}
      </select>
    </label>
  );
};
