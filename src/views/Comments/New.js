import { useParams } from 'react-router-dom'
import AppLayout from 'src/layouts/App'
import Form from 'src/components/form/Form'
import TextArea from 'src/components/form/TextArea'
import FormButtons from 'src/components/form/FormButtons'
import useNewForm from 'src/hooks/useNewForm'
import useValue from 'src/hooks/useValue'
import { commentSchema as schema } from 'src/services/yup'
import API from 'src/services/requests'
import QueryParams from 'src/services/QueryParams'

const CommentsNew = () => {
  const { storyId } = useParams()
  const { value: data, handleInputEvent } = useValue({
    storyId: parseInt(storyId),
    content: '',
  })

  const backPath = QueryParams.get('back') || '/dashboard'
  const { isSubmitting, isValid, onSubmit, validation } = useNewForm({
    data,
    schema,
    onCreate: (data) => API.createComment(data),
    successToast: (data) => 'Comment created successfully.',
    successRedirectPath: backPath,
  })

  return (
    <AppLayout>
      <h1 className="mb-4">New Comment</h1>
      <Form onSubmit={onSubmit}>
        <TextArea
          value={data.content}
          onChange={handleInputEvent}
          validation={validation}
          id="content"
          placeholder="Content"
          autoFocus
        />
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

export default CommentsNew
