/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useParams } from 'react-router-dom'
import threeDots from 'src/assets/threeDots.svg'
import React from 'react'

const Actions = ({ story, updateStoryState, onDelete }) => {
  const { id } = useParams()

  return (
    <div className="btn-group">
      {story.state === 'unstarted' && (
        <button
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'started')}
        >
          Start
        </button>
      )}
      {story.state === 'started' && (
        <button
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'finished')}
        >
          Finish
        </button>
      )}
      {story.state === 'finished' && (
        <button
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'delivered')}
        >
          Deliver
        </button>
      )}
      {story.state === 'delivered' && (
        <button
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'accepted')}
        >
          Accept
        </button>
      )}
      {story.state === 'delivered' && (
        <button
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'rejected')}
        >
          Reject
        </button>
      )}
      {story.state === 'rejected' && (
        <button
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'unstarted')}
        >
          Restart
        </button>
      )}
      {story.state === 'accepted' && (
        <button
          className="btn btn-outline-secondary d-flex align-items-center"
          onClick={() => updateStoryState(story, 'unstarted')}
        >
          Restart
        </button>
      )}
      <button
        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
      >
        <img src={threeDots} alt="pic" />
      </button>
      <div className="dropdown-menu dropdown-menu-end">
        <Link
          className="dropdown-item"
          to={`/projects/${id}/stories/${story.id}/edit`}
        >
          Edit
        </Link>
        <div className="dropdown-divider" />
        <button className="dropdown-item" onClick={() => onDelete(story)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default Actions
