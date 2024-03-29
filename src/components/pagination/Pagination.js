import React from 'react'
import Li from 'src/components/pagination/Li'

const Pagination = ({ pagination }) => {
  const {
    showPagination,
    hasPreviousPage,
    previousPage,
    hasNextPage,
    nextPage,
    page,
    totalPages,
  } = pagination

  const isBeginning = page < 5
  const isEnd = page > totalPages - 4
  const isMiddle = !isBeginning && !isEnd

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

        {totalPages <= 7 ? (
          <>
            <Li show={totalPages >= 1} page={1} pagination={pagination} />
            <Li show={totalPages >= 2} page={2} pagination={pagination} />
            <Li show={totalPages >= 3} page={3} pagination={pagination} />
            <Li show={totalPages >= 4} page={4} pagination={pagination} />
            <Li show={totalPages >= 5} page={5} pagination={pagination} />
            <Li show={totalPages >= 6} page={6} pagination={pagination} />
            <Li show={totalPages >= 7} page={7} pagination={pagination} />
          </>
        ) : (
          <>
            <Li show={isBeginning} page={1} pagination={pagination} />
            <Li show={isBeginning} page={2} pagination={pagination} />
            <Li show={isBeginning} page={3} pagination={pagination} />
            <Li show={isBeginning} page={4} pagination={pagination} />
            <Li show={isBeginning} page={5} pagination={pagination} />

            <Li show={isMiddle || isEnd} page={1} pagination={pagination} />
            {(isMiddle || isEnd) && (
              <li className="page-item disabled">
                <button className="page-link text-dark">...</button>
              </li>
            )}
            <Li show={isMiddle} page={page - 1} pagination={pagination} />
            <Li show={isMiddle} page={page} pagination={pagination} />
            <Li show={isMiddle} page={page + 1} pagination={pagination} />

            {(isBeginning || isMiddle) && (
              <li className="page-item disabled">
                <button className="page-link text-dark">...</button>
              </li>
            )}
            <Li
              show={isBeginning || isMiddle}
              page={totalPages}
              pagination={pagination}
            />

            <Li show={isEnd} page={totalPages - 4} pagination={pagination} />
            <Li show={isEnd} page={totalPages - 3} pagination={pagination} />
            <Li show={isEnd} page={totalPages - 2} pagination={pagination} />
            <Li show={isEnd} page={totalPages - 1} pagination={pagination} />
            <Li show={isEnd} page={totalPages} pagination={pagination} />

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
          </>
        )}
      </ul>
    </nav>
  )
}

export default Pagination
