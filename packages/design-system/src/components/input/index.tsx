import { InputProps } from './types';
import { inputStyles } from './styles';

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <label className={inputStyles.wrapper}>
      {label ? <span className={inputStyles.label}>{label}</span> : null}
      <input className={inputStyles.input} {...props} />
    </label>
  );
};
