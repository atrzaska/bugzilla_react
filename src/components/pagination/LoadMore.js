/* eslint-disable jsx-a11y/anchor-is-valid */
const LoadMore = ({ pagination }) => {
  const { hasNextPage, loadMore } = pagination

  const onClick = (e) => {
    e.preventDefault()
    loadMore()
  }

  if (!hasNextPage) {
    return null
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <a href="#" onClick={onClick}>
        Load More
      </a>
    </div>
  )
}

export default LoadMore
