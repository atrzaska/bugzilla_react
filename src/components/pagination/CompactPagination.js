const CompactPagination = ({ pagination }) => {
  const {
    showPagination,
    hasPreviousPage,
    hasNextPage,
    page,
    totalPages,
    previousPage,
    nextPage,
  } = pagination

  if (!showPagination) {
    return null
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {hasPreviousPage ? (
          <li className="page-item">
            <button onClick={previousPage} className="page-link">
              <i className="fas fa-chevron-left" />
            </button>
          </li>
        ) : (
          <li className="page-item disabled">
            <button className="page-link">
              <i className="fas fa-chevron-left" />
            </button>
          </li>
        )}
        <li className="page-item disabled">
          <button className="page-link text-dark">
            {page} of {totalPages}
          </button>
        </li>
        {hasNextPage ? (
          <li className="page-item">
            <button onClick={nextPage} href="#" className="page-link">
              <i className="fas fa-chevron-right" />
            </button>
          </li>
        ) : (
          <li className="page-item disabled">
            <button className="page-link">
              <i className="fas fa-chevron-right" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default CompactPagination
