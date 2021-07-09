import axios from 'axios'

const onSuccess = (res) => res
const onError = (err) => {
  if (err.response) {
    if (err.response.status === 500) {
      window.Toast.error('Something went wrong, please try again.')
    } else if (err.response.status === 404) {
      window.Toast.error('Resource not found.')
    } else if (err.response.status === 403) {
      window.Toast.error('You have no access to this resource.')
    }
  } else {
    window.Toast.error('Something went wrong, please try again.')
  }

  return Promise.reject(err)
}

axios.interceptors.response.use(onSuccess, onError)
