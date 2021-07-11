import QueryParams from '@/services/QueryParams'
import { useEffect, useState } from 'react'

const useSorting = (initialValue = '') => {
  const [sort, setSort] = useState(QueryParams.get('sort') || initialValue)

  useEffect(() => QueryParams.set({ sort }), [sort])

  return { sort, setSort }
}

export default useSorting
