import { useParams } from 'react-router-dom'
import AppLayout from 'src/layouts/App'
import Loading from 'src/components/Loading'
import Form from 'src/components/form/Form'
import FormButtons from 'src/components/form/FormButtons'
import useEditForm from 'src/hooks/useEditForm'
import { editMemberSchema as schema } from 'src/services/yup'
import API from 'src/services/requests'
import useObject from 'src/hooks/async/useObject'

const MembersEdit = () => {
  const { id, storyId } = useParams()
  const object = useObject({ role: 'member' })
  const { value: data, handleInputEvent } = object
  const { isSubmitting, isValid, loading, onSubmit } = useEditForm({
    id: storyId,
    object,
    schema,
    onFetch: (id) => API.fetchMember(id),
    onUpdate: (id, data) => API.updateMember(id, data),
    successToast: (data) => `User ${data.name} updated successfully.`,
    successRedirectPath: `/projects/${id}/members`,
  })

  return (
    <AppLayout>
      <h1 className="mb-4">Change role of {data.name}</h1>
      <p className="text-secondary">Select a new role</p>
      {loading ? (
        <Loading />
      ) : (
        <Form onSubmit={onSubmit}>
          <div className="mb-3">
            <div className="d-flex flex-column">
              <div className="form-check">
                <input
                  checked={data.role === 'member'}
                  onChange={handleInputEvent}
                  className="form-check-input"
                  id="role_member"
                  name="role"
                  type="radio"
                  value="member"
                />
                <label className="form-check-label mb-3" htmlFor="role_member">
                  <b>Member</b>
                  <div className="text-secondary">
                    Has full administrative access to the entire project.
                  </div>
                </label>
              </div>
              <div className="form-check">
                <input
                  checked={data.role === 'owner'}
                  onChange={handleInputEvent}
                  className="form-check-input"
                  id="role_owner"
                  name="role"
                  type="radio"
                  value="owner"
                />
                <label className="form-check-label" htmlFor="role_owner">
                  <b>Owner</b>
                  <div className="text-secondary">
                    Can see every member and create new stories.
                  </div>
                </label>
              </div>
            </div>
          </div>
          <hr />
          <FormButtons
            ctaText="Change role"
            isValid={isValid}
            isSubmitting={isSubmitting}
            backLink={`/projects/${id}/members`}
          />
        </Form>
      )}
    </AppLayout>
  )
}

export default MembersEdit
