/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useParams } from 'react-router-dom'
import threeDots from 'src/assets/threeDots.svg'
import React from 'react'

const Actions = ({ story, updateStoryState, onDelete }) => {
  const { id } = useParams()

  return (
    <div className="btn-group">
      {story.state === 'unstarted' && (
        <div
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'started')}
        >
          Start
        </div>
      )}
      {story.state === 'started' && (
        <div
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'finished')}
        >
          Finish
        </div>
      )}
      {story.state === 'finished' && (
        <div
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'delivered')}
        >
          Deliver
        </div>
      )}
      {story.state === 'delivered' && (
        <div
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'accepted')}
        >
          Accept
        </div>
      )}
      {story.state === 'delivered' && (
        <div
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'rejected')}
        >
          Reject
        </div>
      )}
      {story.state === 'rejected' && (
        <div
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'unstarted')}
        >
          Restart
        </div>
      )}
      {story.state === 'accepted' && (
        <div
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'unstarted')}
        >
          Restart
        </div>
      )}
      <div
        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
      >
        <img src={threeDots} alt="pic" />
      </div>
      <div className="dropdown-menu dropdown-menu-end">
        <Link
          className="dropdown-item"
          to={`/projects/${id}/stories/${story.id}/edit`}
        >
          Edit
        </Link>
        <div className="dropdown-divider" />
        <div className="dropdown-item" onClick={() => onDelete(story)}>
          Remove
        </div>
      </div>
    </div>
  )
}

export default Actions
