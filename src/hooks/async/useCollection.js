import useArray from 'src/hooks/useArray'
import useValue from 'src/hooks/useValue'

const useCollection = () => {
  const collection = useArray([])
  const total = useValue(1)
  const loading = useValue(true)

  const setCollection = (data) => {
    collection.setValue(data.collection)
    total.setValue(data.total)
    loading.setValue(false)
  }

  const appendCollection = (data) => {
    collection.append(data.collection)
    total.setValue(data.total)
    loading.setValue(false)
  }

  const reset = () => {
    collection.setValue([])
    total.setValue(0)
  }

  const startLoading = () => {
    loading.setValue(true)
  }

  const stopLoading = () => {
    loading.setValue(false)
  }

  return {
    collection: collection.value,
    total: total.value,
    loading: loading.value,
    setCollection,
    appendCollection,
    reset,
    startLoading,
    stopLoading,
  }
}

export default useCollection
