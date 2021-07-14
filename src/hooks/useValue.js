import { useState } from 'react'

const getFieldAndValue = (e) => {
  const target = e.target
  const isCheckbox = target.type === 'checkbox'
  let value = isCheckbox ? target.checked : target.value
  const field = target.name || target.id
  return { field, value }
}

const useValue = (initialState = {}) => {
  const [value, setValue] = useState(initialState)

  const setField = (field, value) => {
    setValue((state) => {
      const obj = { ...state }

      if (value == null) {
        delete obj[field]
      } else {
        obj[field] = value
      }

      return obj
    })
  }

  const handleInputEvent = (e) => {
    const { field, value } = getFieldAndValue(e)

    setField(field, value)
  }

  return { value, handleInputEvent, setField, setValue }
}

export default useValue
