import { useState } from 'react'

const useArray = (initialState = []) => {
  const [state, setState] = useState(initialState)

  const splice = (index) => {
    setState((state) => state.filter((x, i) => i !== index))
  }

  const remove = (item) => {
    setState((state) => state.filter((x) => x !== item))
  }

  const push = (item) => setState((state) => [...state, item])

  return { state, setState, splice, remove, push }
}

export default useArray
