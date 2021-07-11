import { useState } from 'react'

const useObject = (initialObject = {}) => {
  const [value, setValue] = useState(initialObject)
  const [loading, setLoading] = useState(true)

  const setObject = (obj) => {
    setValue(obj)
    setLoading(false)
  }

  return { value, loading, setObject, setLoading }
}

export default useObject
