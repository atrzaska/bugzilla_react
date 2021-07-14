const ErrorsBox = ({ validation }) => {
  const { fullErrors } = validation

  if (!fullErrors.length) {
    return null
  }

  return (
    <div className="alert alert-danger">
      <p>Please correct the following error(s):</p>
      <ul>
        {fullErrors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  )
}

export default ErrorsBox
