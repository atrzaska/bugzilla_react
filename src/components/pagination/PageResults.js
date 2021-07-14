const PageResults = ({ pagination }) => {
  const {
    showPagination,
    total,
    pageFirstItem: first,
    pageLastItem: last,
  } = pagination

  if (!showPagination) {
    return null
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <button className="page-link text-dark">
            {first}-{last} of {total} results
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default PageResults
