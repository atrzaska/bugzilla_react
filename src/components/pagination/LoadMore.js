import A from 'src/components/A'

const LoadMore = ({ pagination }) => {
  const { hasNextPage, loadMore } = pagination

  if (!hasNextPage) {
    return null
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <A onClick={loadMore}>Load More</A>
    </div>
  )
}

export default LoadMore
