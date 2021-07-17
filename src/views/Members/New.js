import { useParams } from 'react-router-dom'
import AppLayout from 'src/layouts/App'
import Form from 'src/components/form/Form'
import Field from 'src/components/form/Field'
import FormButtons from 'src/components/form/FormButtons'
import useNewForm from 'src/hooks/useNewForm'
import useValue from 'src/hooks/useValue'
import { newMemberSchema as schema } from 'src/services/yup'
import API from 'src/services/requests'

const MembersNew = () => {
  const { id } = useParams()
  const { value: data, handleInputEvent } = useValue({
    projectId: parseInt(id),
    email: '',
  })

  const { isSubmitting, isValid, onSubmit, validation } = useNewForm({
    data,
    schema,
    onCreate: (data) => API.createInvite(data),
    successToast: (data) => `${data.email} has been invited to the project.`,
    successRedirectPath: `/projects/${id}/members`,
  })

  return (
    <AppLayout>
      <h1 className="mb-4">Invite member</h1>
      <Form onSubmit={onSubmit}>
        <Field
          value={data.email}
          onChange={handleInputEvent}
          validation={validation}
          id="email"
          label="Email"
          autofocus
        />
        <hr />
        <FormButtons
          isValid={isValid}
          isSubmitting={isSubmitting}
          backLink={`/projects/${id}/members`}
        />
      </Form>
    </AppLayout>
  )
}

export default MembersNew
