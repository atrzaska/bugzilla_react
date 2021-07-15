import { useParams, Link } from 'react-router-dom'
import Actions from './Actions'

const Story = ({ story, updateStoryState, onDelete }) => {
  const { id } = useParams()

  return (
    <tr>
      <td>
        <Link to={`/projects/${id}/stories/${story.id}/edit`}>
          {story.name}
        </Link>
      </td>
      <td>{story.state}</td>
      <td>{story.kind}</td>
      <td>{story.container}</td>
      <td>{story.tasksCount}</td>
      <td>{story.commentsCount}</td>
      <td>
        <div className="d-flex justify-content-end">
          <Actions
            story={story}
            updateStoryState={updateStoryState}
            onDelete={onDelete}
          />
        </div>
      </td>
    </tr>
  )
}

export default Story
