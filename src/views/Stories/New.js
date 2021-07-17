import { useParams } from 'react-router-dom'
import AppLayout from 'src/layouts/App'
import Form from 'src/components/form/Form'
import Field from 'src/components/form/Field'
import FormButtons from 'src/components/form/FormButtons'
import useNewForm from 'src/hooks/useNewForm'
import { storySchema as schema } from 'src/services/yup'
import API from 'src/services/requests'
import useValue from 'src/hooks/useValue'

const StoriesNew = () => {
  const { id } = useParams()
  const { value: data, handleInputEvent } = useValue({
    projectId: parseInt(id),
    container: 'icebox',
    kind: 'feature',
    state: 'unstarted',
    name: '',
    description: '',
  })
  const {
    errors,
    invalidFieldClass,
    isSubmitting,
    isValid,
    onSubmit,
    validation,
  } = useNewForm({
    data,
    schema,
    onCreate: (data) => API.createStory(data),
    successToast: (data) => `Story ${data.name} created successfully.`,
    successRedirectPath: `/projects/${id}/current`,
  })

  const handleInput = (e) => {
    handleInputEvent(e)
    validation.validateField(e)
  }

  return (
    <AppLayout>
      <h1 className="mb-4">New Story</h1>
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
            className={['form-select', invalidFieldClass('kind')].join(' ')}
            onChange={handleInput}
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
            className={['form-select', invalidFieldClass('container')].join(
              ' '
            )}
            onChange={handleInput}
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
          backLink={`/projects/${id}/current`}
        />
      </Form>
    </AppLayout>
  )
}

export default StoriesNew
