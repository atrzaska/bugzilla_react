import { useState } from 'react'

const useLoadMorePagination = (options = {}) => {
  const collection = options.collection
  const total = options.total
  const [offset, setOffset] = useState(0)
  const hasNextPage = () => collection.length < total

  const loadMore = () => setOffset(collection.length)
  const reset = () => setOffset(0)

  return {
    collection,
    total,
    offset,
    hasNextPage,
    loadMore,
    reset,
  }
}

export default useLoadMorePagination
