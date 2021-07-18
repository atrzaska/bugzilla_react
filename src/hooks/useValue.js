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

  const setFields = (params) => {
    setValue((state) => {
      const obj = { ...state }

      for (const [field, value] of Object.entries(params)) {
        if (value == null) {
          delete obj[field]
        } else {
          obj[field] = value
        }
      }

      return obj
    })
  }

  const setField = (field, value) => setFields({ [field]: value })

  const handleInputEvent = (e) => {
    const { field, value } = getFieldAndValue(e)

    setField(field, value)
  }

  return { value, handleInputEvent, setField, setFields, setValue }
}

export default useValue
