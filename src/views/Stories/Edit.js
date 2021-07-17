import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import AppLayout from 'src/layouts/App'
import Loading from 'src/components/Loading'
import LoadMore from 'src/components/pagination/LoadMore'
import Form from 'src/components/form/Form'
import Field from 'src/components/form/Field'
import FormButtons from 'src/components/form/FormButtons'
import CollectionWithFallback from 'src/components/CollectionWithFallback'
import TasksEmpty from './components/TasksEmpty'
import CommentsEmpty from './components/CommentsEmpty'
import useObject from 'src/hooks/async/useObject'
import useCollection from 'src/hooks/async/useCollection'
import useEditForm from 'src/hooks/useEditForm'
import useLoadMorePagination from 'src/hooks/useLoadMorePagination'
import { storySchema as schema } from 'src/services/yup'
import API from 'src/services/requests'

const StoriesEdit = () => {
  const { projectId, id } = useParams()
  const object = useObject({ name: '' })
  const { value: data, handleInputEvent } = object
  const {
    errors,
    invalidFieldClass,
    isSubmitting,
    isValid,
    loading,
    onSubmit,
    validation,
  } = useEditForm({
    object,
    id,
    schema,
    onFetch: (id) => API.fetchStory(id),
    onUpdate: (id, data) => API.updateStory(id, data),
    successToast: (data) => `Story ${data.name} updated successfully.`,
    successRedirectPath: `/projects/${projectId}/current`,
  })

  const handleInput = (e) => {
    handleInputEvent(e)
    validation.validateField(e)
  }

  const routes = {
    currentStoriesPath: () => `/projects/${projectId}/current`,
    newCommentPath: () =>
      `/stories/${id}/comments/new?back=/projects/${projectId}/stories/${id}/edit`,
    editCommentPath: (comment) =>
      `/stories/${id}/comments/${comment.id}/edit?back=/projects/${projectId}/stories/${id}/edit`,
    newTaskPath: () =>
      `/stories/${id}/tasks/new?back=/projects/${projectId}/stories/${id}/edit`,
    editTaskPath: (task) =>
      `/stories/${id}/tasks/${task.id}/edit?back=/projects/${projectId}/stories/${id}/edit`,
  }

  // comments
  const commentsData = useCollection()
  const commentsPagination = useLoadMorePagination(commentsData)
  const fetchComments = () =>
    API.fetchComments(
      { 'filter.storyId': id, offset: commentsPagination.offset },
      { refresh: true }
    ).then((res) => commentsData.appendCollection(res.data))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchComments, [commentsPagination.offset])

  const onDeleteCommentConfirmed = (comment) =>
    API.deleteComment(comment.id).then((res) => {
      window.Toast.success('Comment removed successfully.')
      commentsData.startLoading()

      if (commentsPagination.offset === 0) {
        commentsData.reset()
        commentsPagination.reset()
        fetchComments()
      } else {
        commentsData.reset()
        commentsPagination.reset()
      }
    })

  const onDeleteComment = (comment) =>
    window.Modal.confirmDelete({
      title: 'You are about to remove a comment',
      onConfirm: () => onDeleteCommentConfirmed(comment),
    })

  // tasks
  const tasksData = useCollection()
  const tasksPagination = useLoadMorePagination(tasksData)
  const fetchTasks = () =>
    API.fetchTasks(
      { 'filter.storyId': id, offset: tasksPagination.offset },
      { refresh: true }
    ).then((res) => tasksData.appendCollection(res.data))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchTasks, [tasksPagination.offset])

  const onDeleteTaskConfirmed = (task) =>
    API.deleteTask(task.id).then((res) => {
      window.Toast.success(`Task ${task.description} removed successfully.`)
      tasksData.startLoading()

      if (tasksPagination.offset === 0) {
        tasksData.reset()
        tasksPagination.reset()
        fetchTasks()
      } else {
        tasksData.reset()
        tasksPagination.reset()
      }
    })

  const onDeleteTask = (task) =>
    window.Modal.confirmDelete({
      title: `You are about to remove ${task.description}`,
      onConfirm: () => onDeleteTaskConfirmed(task),
    })

  return (
    <AppLayout>
      <h1 className="mb-4">Edit Story</h1>
      {loading ? (
        <Loading />
      ) : (
        <Form onSubmit={onSubmit}>
          <Field
            value={data.name}
            onChange={handleInputEvent}
            validation={validation}
            id="name"
            label="Name"
            autoFocus
          />
          <Field
            value={data.description}
            onChange={handleInputEvent}
            validation={validation}
            id="description"
            label="Description"
          />
          <div className="mb-3">
            <label className="form-label" htmlFor="kind">
              Story type
            </label>
            <select
              value={data.kind}
              onChange={handleInput}
              className={['form-select', invalidFieldClass('kind')].join(' ')}
              id="kind"
            >
              <option value="feature">Feature</option>
              <option value="bug">Bug</option>
              <option value="chore">Chore</option>
              <option value="release">Release</option>
            </select>
            {errors.value.kind && (
              <div className="invalid-feedback">{errors.value.kind}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="container">
              Container
            </label>
            <select
              value={data.container}
              onChange={handleInput}
              className={['form-select', invalidFieldClass('container')].join(
                ' '
              )}
              id="container"
            >
              <option value="icebox">Icebox</option>
              <option value="backlog">Backlog</option>
            </select>
            {errors.value.container && (
              <div className="invalid-feedback">{errors.value.container}</div>
            )}
          </div>
          <hr />
          <FormButtons
            isValid={isValid}
            isSubmitting={isSubmitting}
            backLink={routes.currentStoriesPath()}
          />
        </Form>
      )}
      <hr />
      <h5>Comments</h5>
      <CollectionWithFallback
        data={commentsData}
        Loading={Loading}
        Empty={CommentsEmpty}
      >
        <div>
          <div className="list-group border-0 mb-3">
            {commentsData.collection.map((comment) => (
              <div key={comment.id} className="list-group-item d-flex">
                <Link className="me-auto" to={routes.editCommentPath(comment)}>
                  {comment.content}
                </Link>
                <button
                  className="btn btn-link p-0 border-0"
                  onClick={() => onDeleteComment(comment)}
                >
                  <i className="far fa-times-circle" />
                </button>
              </div>
            ))}
          </div>
          <LoadMore pagination={commentsPagination} />
        </div>
      </CollectionWithFallback>
      <Link className="mb-3" to={routes.newCommentPath()}>
        New Comment
      </Link>
      <hr />
      <h5>Tasks</h5>
      <CollectionWithFallback
        data={tasksData}
        Loading={Loading}
        Empty={TasksEmpty}
      >
        <div>
          <div className="list-group border-0 mb-3">
            {tasksData.collection.map((task) => (
              <div key={task.id} className="list-group-item d-flex">
                <Link className="me-auto" to={routes.editTaskPath(task)}>
                  {task.description}
                </Link>
                <button
                  className="btn btn-link p-0 border-0"
                  onClick={() => onDeleteTask(task)}
                >
                  <i className="far fa-times-circle" />
                </button>
              </div>
            ))}
          </div>
          <LoadMore pagination={tasksPagination} />
        </div>
      </CollectionWithFallback>
      <Link to={routes.newTaskPath()}>New Task</Link>
    </AppLayout>
  )
}

export default StoriesEdit
