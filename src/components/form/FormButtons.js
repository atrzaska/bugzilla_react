import { Link } from 'react-router-dom'

const FormButtons = ({ isValid, isSubmitting, backLink, ctaText = 'Save' }) => (
  <div className="mb-3">
    <button
      className="btn btn-primary me-2"
      type="submit"
      disabled={!isValid() || isSubmitting}
    >
      {isSubmitting ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>{ctaText}</div>
      )}
    </button>
    {backLink && (
      <Link className="btn btn-outline-secondary" to={backLink}>
        Back
      </Link>
    )}
  </div>
)

export default FormButtons
