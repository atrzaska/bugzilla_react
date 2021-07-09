import router from '@/router'
import API from '@/lib/api'
import { setAccessToken } from '@/services/jwt'

const get =
  (path) =>
  (params, options = {}) =>
    API.get(path, { params, ...options })

const clearToken = () => {
  setAccessToken(null)
  router.push('/signin')
  API.clearCache('/me')
}

const clearCurrentUserCache = () => API.clearCache('/me')

const logout = () => API.post('/logout').then(clearToken).catch(clearToken)

const signIn = (params) => API.post('/signin', params)
const signUp = (user) => API.post('/signup', user)
const createRecovery = (params) => API.post('/recover', params)
const createConfirmation = (params) => API.post('/confirm', params)
const fetchResetPassword = (id) => API.get(`/reset_password/${id}`)
const updateResetPassword = (id, params) =>
  API.put(`/reset_password/${id}`, params)

const fetchCurrentUser = get('/me')
const updateCurrentUser = (params) => API.putMultipart('/me', params)
const deleteCurrentUser = () => API.delete('/me')
const updateEmail = (params) => API.put('/me/email', params)
const updatePassword = (params) => API.put('/me/password', params)

const fetchProjects = get('/projects')
const fetchProject = (id) => API.get(`/projects/${id}`)
const createProject = (params) => API.post('/projects', params)
const updateProject = (id, params) => API.put(`/projects/${id}`, params)
const deleteProject = (id) => API.delete(`/projects/${id}`)

const fetchStories = get('/stories')
const fetchStory = (id) => API.get(`/stories/${id}`)
const createStory = (params) => API.post('/stories', params)
const updateStory = (id, params) => API.put(`/stories/${id}`, params)
const deleteStory = (id) => API.delete(`/stories/${id}`)

const fetchComments = get('/comments')
const fetchComment = (id) => API.get(`/comments/${id}`)
const createComment = (params) => API.post('/comments', params)
const updateComment = (id, params) => API.put(`/comments/${id}`, params)
const deleteComment = (id) => API.delete(`/comments/${id}`)

const fetchTasks = get('/tasks')
const fetchTask = (id) => API.get(`/tasks/${id}`)
const createTask = (params) => API.post('/tasks', params)
const updateTask = (id, params) => API.put(`/tasks/${id}`, params)
const deleteTask = (id) => API.delete(`/tasks/${id}`)

const fetchMembers = get('/members')
const fetchMember = (id) => API.get(`/members/${id}`)
const createMember = (params) => API.post('/members', params)
const updateMember = (id, params) => API.put(`/members/${id}`, params)
const deleteMember = (id) => API.delete(`/members/${id}`)

const createInvite = (params) => API.post('/invites', params)

export default {
  clearCurrentUserCache,
  clearToken,
  logout,

  signIn,
  signUp,
  createRecovery,
  createConfirmation,
  fetchResetPassword,
  updateResetPassword,

  fetchCurrentUser,
  updateCurrentUser,
  deleteCurrentUser,
  updateEmail,
  updatePassword,

  fetchProjects,
  fetchProject,
  createProject,
  updateProject,
  deleteProject,

  fetchStories,
  fetchStory,
  createStory,
  updateStory,
  deleteStory,

  fetchComments,
  fetchComment,
  createComment,
  updateComment,
  deleteComment,

  fetchTasks,
  fetchTask,
  createTask,
  updateTask,
  deleteTask,

  fetchMembers,
  fetchMember,
  createMember,
  updateMember,
  deleteMember,

  createInvite,
}
