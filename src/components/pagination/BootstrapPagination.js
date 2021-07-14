const MORE_ITEMS_TO_SHOW = 3 // current page + 2 more items

const BootstrapPagination = ({ pagination }) => {
  const {
    showPagination,
    hasPreviousPage,
    previousPage,
    hasNextPage,
    nextPage,
    page,
    totalPages,
    goToPage,
    activePageClass,
  } = pagination

  const visiblePages = () => {
    const result = []

    for (var i = 1; i <= totalPages; i++) {
      const diff = Math.abs(i - page)

      if (diff <= MORE_ITEMS_TO_SHOW) {
        result.push(i)
      }
    }

    return result
  }

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
        {visiblePages().map((visiblePage) => (
          <li
            key={visiblePage}
            className={['page-item', activePageClass(visiblePage)].join(' ')}
          >
            <button onClick={() => goToPage(visiblePage)} className="page-link">
              {visiblePage}
            </button>
          </li>
        ))}
        {hasNextPage ? (
          <li className="page-item">
            <button onClick={nextPage} className="page-link">
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

export default BootstrapPagination
