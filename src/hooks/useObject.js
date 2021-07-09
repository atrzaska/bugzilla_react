import { useState } from 'react'

const useObject = (initialObject = {}) => {
  const [object, setObj] = useState(initialObject)
  const [loading, setLoading] = useState(true)

  const setObject = (obj) => {
    setObj(obj)
    setLoading(false)
  }

  return { object, loading, setObject }
}

export default useObject
