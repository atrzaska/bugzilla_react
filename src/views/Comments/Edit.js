import AppLayout from 'src/layouts/App'
import Loading from 'src/components/Loading'
import FormButtons from 'src/components/form/FormButtons'
import TextArea from 'src/components/form/TextArea'
import Form from 'src/components/form/Form'
import useEditForm from 'src/hooks/useEditForm'
import { commentSchema as schema } from 'src/services/yup'
import API from 'src/services/requests'
import QueryParams from 'src/services/QueryParams'
import useObject from 'src/hooks/async/useObject'

const CommentsEdit = () => {
  const backPath = QueryParams.get('back') || '/dashboard'
  const object = useObject({ content: '' })
  const { value: data, handleInputEvent } = object
  const { isSubmitting, isValid, loading, onSubmit, validation } = useEditForm({
    object,
    schema,
    onFetch: (id) => API.fetchComment(id),
    onUpdate: (id, data) => API.updateComment(id, data),
    successToast: (data) => 'Comment updated successfully.',
    successRedirectPath: backPath,
  })

  return (
    <AppLayout>
      <h1 className="mb-4">Edit Comment</h1>
      {loading ? (
        <Loading />
      ) : (
        <Form onSubmit={onSubmit}>
          <TextArea
            value={data.content}
            onChange={handleInputEvent}
            validation={validation}
            id="content"
            label="Content"
            autoFocus
          />
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

export default CommentsEdit
