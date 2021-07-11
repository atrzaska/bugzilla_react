import { useState } from 'react'

const useArray = (initialState = []) => {
  const [value, setValue] = useState(initialState)

  const splice = (index) =>
    setValue((value) => value.filter((x, i) => i !== index))
  const remove = (item) => setValue((value) => value.filter((x) => x !== item))
  const push = (item) => setValue((value) => [...value, item])
  const append = (data) => setValue((value) => value.concat(data))

  return { value, setValue, splice, remove, push, append }
}

export default useArray
