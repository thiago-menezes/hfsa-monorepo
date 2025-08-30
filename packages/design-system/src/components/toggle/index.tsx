import { useCallback, useMemo, useState } from 'react';
import { clsx } from 'clsx';
import { ToggleProps } from './types';
import { toggleStyles } from './styles';

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
    <label className={clsx(toggleStyles.wrapper, className)}>
      <span
        className={clsx(
          toggleStyles.switch,
          isOn && toggleStyles.switchChecked,
          isFocused && toggleStyles.switchFocus,
          disabled && toggleStyles.switchDisabled,
        )}
      >
        <span
          className={clsx(
            toggleStyles.thumb,
            isOn && toggleStyles.thumbChecked,
          )}
        />
        <input
          type="checkbox"
          className={toggleStyles.input}
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
      {label ? <span className={toggleStyles.label}>{label}</span> : null}
    </label>
  );
};
