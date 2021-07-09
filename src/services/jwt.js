let accessToken = null

const setAccessToken = (val) => (accessToken = val)
const getAccessToken = () => accessToken

export { setAccessToken, getAccessToken }
