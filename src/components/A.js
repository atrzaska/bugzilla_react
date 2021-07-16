/* eslint-disable jsx-a11y/anchor-is-valid */
const A = ({ onClick, children, ...props }) => {
  const onClickWrapped = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    <a {...props} href="#" onClick={onClickWrapped}>
      {children}
    </a>
  )
}

export default A
