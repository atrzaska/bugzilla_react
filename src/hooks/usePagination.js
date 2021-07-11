import QueryParams from '@/services/QueryParams'
import { useState } from 'react'

const SIZE = 10

const usePagination = (options = {}) => {
  const defaultPage = parseInt(QueryParams.get('page')) || 1
  const size = options.size || SIZE
  const collection = options.collection
  const total = options.total
  const [page, setPage] = useState(defaultPage)
  const [offset, setOffset] = useState(0)
  const totalPages = () => Math.ceil(total / size)
  const showPagination = () => totalPages > 1
  const hasPreviousPage = () => page > 1
  const hasNextPage = () => page < totalPages
  const pageLastItem = () => Math.min(page * size, total)
  const pageFirstItem = () =>
    collection.length === 0 ? 0 : (page - 1) * size + 1

  const activePageClass = (val) => page === val && 'active'

  const goToPage = (val) => {
    if (isNaN(val) || val > totalPages || val < 1) {
      return
    }

    setPage(val)
    setOffset((val - 1) * size)
    QueryParams.set({ page: val })
  }

  const previousPage = () => goToPage(page - 1)
  const nextPage = () => goToPage(page + 1)

  return {
    collection,
    total,
    page,
    size,
    offset,
    totalPages,
    showPagination,
    hasPreviousPage,
    hasNextPage,
    pageFirstItem,
    pageLastItem,
    previousPage,
    nextPage,
    goToPage,
    activePageClass,
  }
}

export default usePagination
