import AppLayout from 'src/layouts/App'
import useNewForm from 'src/hooks/useNewForm'
import Field from 'src/components/form/Field'
import FormButtons from 'src/components/form/FormButtons'
import { projectSchema as schema } from 'src/services/yup'
import API from 'src/services/requests'
import useValue from 'src/hooks/useValue'
import Form from 'src/components/form/Form'

const ProjectsNew = () => {
  const { value: data, handleInputEvent } = useValue({ name: '' })
  const { isValid, isSubmitting, onSubmit, validation } = useNewForm({
    data,
    schema,
    onCreate: (data) => API.createProject(data),
    successToast: (data) => `Project ${data.name} created successfully.`,
    successRedirectPath: '/projects',
  })

  return (
    <AppLayout>
      <h1 className="mb-4">New Project</h1>
      <Form onSubmit={onSubmit}>
        <Field
          value={data.name}
          onChange={handleInputEvent}
          validation={validation}
          id="name"
          label="Name"
          autoFocus
        />
        <hr />
        <FormButtons
          isValid={isValid}
          isSubmitting={isSubmitting}
          backLink="/projects"
        />
      </Form>
    </AppLayout>
  )
}

export default ProjectsNew
