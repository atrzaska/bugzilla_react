import AppLayout from 'src/layouts/App'
import Loading from 'src/components/Loading'
import FormButtons from 'src/components/form/FormButtons'
import TextArea from 'src/components/form/TextArea'
import useEditForm from 'src/hooks/useEditForm'
import { taskSchema as schema } from 'src/services/yup'
import API from 'src/services/requests'
import QueryParams from 'src/services/QueryParams'
import Form from 'src/components/form/Form'
import useObject from 'src/hooks/async/useObject'

const TasksEdit = () => {
  const backPath = QueryParams.get('back') || '/dashboard'
  const object = useObject({ name: '' })
  const { value: data, handleInputEvent } = object
  const { errors, isSubmitting, isValid, loading, onSubmit, validation } =
    useEditForm({
      object,
      schema,
      onFetch: (id) => API.fetchTask(id),
      onUpdate: (id, data) => API.updateTask(id, data),
      successToast: (data) => 'Task updated successfully.',
      successRedirectPath: backPath,
    })

  return (
    <AppLayout>
      <h1 className="mb-4">Edit Task</h1>
      {loading ? (
        <Loading />
      ) : (
        <Form onSubmit={onSubmit}>
          <TextArea
            value={data.description}
            onChange={handleInputEvent}
            validation={validation}
            id="description"
            placeholder="Description"
            autoFocus
          />
          <div className="mb-3">
            <div className="form-check">
              <input
                checked={data.complete}
                onChange={handleInputEvent}
                id="complete"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="complete" className="form-check-label">
                Complete
              </label>
              {errors.value.complete && (
                <div className="invalid-feedback">{errors.value.complete}</div>
              )}
            </div>
          </div>
          <hr />
          <FormButtons
            isValid={isValid}
            isSubmitting={isSubmitting}
            backLink={backPath}
          />
        </Form>
      )}
    </AppLayout>
  )
}

export default TasksEdit
