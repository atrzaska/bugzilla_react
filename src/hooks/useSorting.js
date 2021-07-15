import QueryParams from 'src/services/QueryParams'
import { useEffect, useState } from 'react'

const useSorting = (initialValue = '') => {
  const [sort, setSort] = useState(QueryParams.get('sort') || initialValue)

  const handleInputEvent = (e) => setSort(e.target.value)

  useEffect(
    () => QueryParams.setWithDefault('sort', sort, initialValue),
    [sort]
  )

  return { sort, setSort, handleInputEvent }
}

export default useSorting
