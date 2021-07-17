const Field = ({
  value,
  onChange,
  validation,
  id,
  name,
  placeholder,
  label,
  type = 'text',
  wrapperClass = 'mb-3',
  labelClass = 'form-label',
  inputClass = 'form-control',
  errorClass = 'invalid-feedback',
  autoFocus = false,
}) => {
  const field = name || id
  const onChangeWrapped = (e) => {
    validation.validateField(e)
    onChange(e)
  }

  return (
    <div className={wrapperClass}>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChangeWrapped}
        className={[inputClass, validation.invalidFieldClass(field)].join(' ')}
        id={id}
        name={field}
        placeholder={placeholder || label}
        type={type}
        autoFocus={autoFocus}
      />
      {validation.errors.value[field] && (
        <div className={errorClass}>{validation.errors.value[field]}</div>
      )}
    </div>
  )
}

export default Field
