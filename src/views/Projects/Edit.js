import AppLayout from 'src/layouts/App'
import Loading from 'src/components/Loading'
import Form from 'src/components/form/Form'
import Field from 'src/components/form/Field'
import FormButtons from 'src/components/form/FormButtons'
import useEditForm from 'src/hooks/useEditForm'
import { projectSchema as schema } from 'src/services/yup'
import API from 'src/services/requests'
import useObject from 'src/hooks/async/useObject'

const ProjectsEdit = () => {
  const object = useObject({ name: '' })
  const { value: data, handleInputEvent } = object
  const { isSubmitting, isValid, loading, onSubmit, validation } = useEditForm({
    object,
    schema,
    onFetch: (id) => API.fetchProject(id),
    onUpdate: (id, data) => API.updateProject(id, data),
    successToast: (data) => `Project ${data.name} updated successfully.`,
    successRedirectPath: '/projects',
  })

  return (
    <AppLayout>
      <h1 className="mb-4">Edit Project</h1>
      {loading ? (
        <Loading />
      ) : (
        <Form onSubmit={onSubmit}>
          <Field
            v-model="data.name"
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
      )}
    </AppLayout>
  )
}

export default ProjectsEdit
