import { useCallback, useMemo, useState } from 'react';
import { clsx } from 'clsx';
import { ToggleProps } from './types';
import styles from './styles.module.css';

export const Toggle = ({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  className,
  ...rest
}: ToggleProps) => {
  const isControlled = typeof checked === 'boolean';
  const [internalChecked, setInternalChecked] = useState<boolean>(
    defaultChecked ?? false,
  );
  const [isFocused, setIsFocused] = useState(false);

  const isOn = useMemo(
    () => (isControlled ? !!checked : internalChecked),
    [isControlled, checked, internalChecked],
  );

  const handleChange = useCallback<NonNullable<ToggleProps['onChange']>>(
    (e) => {
      if (!isControlled) setInternalChecked(e.target.checked);
      onChange?.(e);
    },
    [isControlled, onChange],
  );

  return (
    <label className={clsx(styles.toggle__wrapper, className)}>
      <span
        className={clsx(
          styles.toggle__switch,
          isOn && styles['toggle__switch--checked'],
          isFocused && styles['toggle__switch--focus'],
          disabled && styles['toggle__switch--disabled'],
        )}
      >
        <span
          className={clsx(
            styles.toggle__thumb,
            isOn && styles['toggle__thumb--checked'],
          )}
        />
        <input
          type="checkbox"
          className={styles.toggle__input}
          checked={isControlled ? isOn : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          aria-checked={isOn}
          aria-label={typeof label === 'string' ? label : undefined}
          {...rest}
        />
      </span>
      {label ? <span className={styles.toggle__label}>{label}</span> : null}
    </label>
  );
};
