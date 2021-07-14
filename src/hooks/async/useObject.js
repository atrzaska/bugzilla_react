import { useState } from 'react'
import useValue from '../useValue'

const useObject = (initialObject = {}) => {
  const { value, setValue, handleInputEvent } = useValue(initialObject)
  const [loading, setLoading] = useState(true)

  const setObject = (obj) => {
    setValue(obj)
    setLoading(false)
  }

  return { value, loading, setObject, setLoading, handleInputEvent }
}

export default useObject
