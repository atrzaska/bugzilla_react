import { useEffect, useState } from 'react'

const TopPagination = ({ pagination }) => {
  const {
    showPagination,
    hasPreviousPage,
    hasNextPage,
    page,
    totalPages,
    previousPage,
    nextPage,
    goToPage,
  } = pagination

  const [inputValue, setInputValue] = useState(page.toString())
  const onFormSubmit = (e) => {
    e.preventDefault()
    goToPage(page)
    setInputValue(page)
  }

  const onPageChange = (e) => {
    const val = parseInt(e.target.value)

    if (isNaN(val)) {
      goToPage(1)
    } else if (val < 1) {
      goToPage(1)
    } else if (val > totalPages) {
      goToPage(totalPages)
    } else {
      goToPage(val)
    }
  }

  const onKeyDown = (e) => e.key === 'Enter' && onPageChange(e)

  useEffect(() => setInputValue(page.toString()), [page])

  if (!showPagination) {
    return null
  }

  return (
    <div className="d-flex justify-content-end align-items-center">
      {hasPreviousPage ? (
        <button onClick={previousPage} className="btn btn-link p-0 border-0">
          <div className="pe-2 text-primary">
            <i className="fas fa-chevron-left" />
          </div>
        </button>
      ) : (
        <div className="pe-2">
          <i className="fas fa-chevron-left" />
        </div>
      )}
      <div className="col-2 me-2">
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="form-control text-center"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={onPageChange}
            onKeyDown={onKeyDown}
          />
        </form>
      </div>
      <span>of {totalPages}</span>
      {hasNextPage ? (
        <button onClick={nextPage} className="btn btn-link p-0 border-0">
          <div className="ps-2 text-primary">
            <i className="fas fa-chevron-right" />
          </div>
        </button>
      ) : (
        <div className="ps-2">
          <i className="fas fa-chevron-right" />
        </div>
      )}
    </div>
  )
}

export default TopPagination
