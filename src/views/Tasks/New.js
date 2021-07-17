import { useParams } from 'react-router-dom'
import AppLayout from 'src/layouts/App'
import Form from 'src/components/form/Form'
import FormButtons from 'src/components/form/FormButtons'
import TextArea from 'src/components/form/TextArea'
import useNewForm from 'src/hooks/useNewForm'
import useValue from 'src/hooks/useValue'
import { taskSchema as schema } from 'src/services/yup'
import API from 'src/services/requests'
import QueryParams from 'src/services/QueryParams'

const TasksNew = () => {
  const { storyId } = useParams()
  const { value: data, handleInputEvent } = useValue({
    storyId: parseInt(storyId),
    description: '',
    complete: false,
  })

  const backPath = QueryParams.get('back') || '/dashboard'
  const { errors, isSubmitting, isValid, onSubmit, validation } = useNewForm({
    data,
    schema,
    onCreate: (data) => API.createTask(data),
    successToast: (data) => 'Task created successfully.',
    successRedirectPath: backPath,
  })

  const handleInput = (e) => {
    handleInputEvent(e)
    validation.validateField(e)
  }

  return (
    <AppLayout>
      <h1 className="mb-4">New Task</h1>
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
              onChange={handleInput}
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
    </AppLayout>
  )
}

export default TasksNew
