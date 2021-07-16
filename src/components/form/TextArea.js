const TextArea = ({
  value,
  onChange,
  validation,
  id,
  field: fieldParam,
  placeholder,
  label,
  wrapperClass = 'mb-3',
  labelClass = 'form-label',
  inputClass = 'form-control',
  errorClass = 'invalid-feedback',
  autoFocus = false,
}) => {
  const field = fieldParam || id

  const onChangeWrapped = (e) => {
    validation.validateField(e)
    onChange(e)
  }

  return (
    <div className={wrapperClass}>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <textarea
        value={value}
        onChange={onChangeWrapped}
        className={[inputClass, validation.invalidFieldClass(field)].join(' ')}
        id={id}
        placeholder={placeholder || label}
        autoFocus={autoFocus}
      />
      {validation.errors.value[field] && (
        <div className={errorClass}>{validation.errors.value[field]}</div>
      )}
    </div>
  )
}

export default TextArea
