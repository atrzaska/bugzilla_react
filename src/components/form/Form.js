const Form = ({ children, onSubmit, ...props }) => {
  const onSubmitWrapped = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form {...props} onSubmit={onSubmitWrapped}>
      {children}
    </form>
  )
}

export default Form
