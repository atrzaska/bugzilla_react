/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useParams } from 'react-router-dom'
import threeDots from 'src/assets/threeDots.svg'
import React from 'react'

const Actions = ({ story, updateStoryState, onDelete }) => {
  const { id } = useParams()

  return (
    <div className="btn-group">
      {story.state === 'unstarted' && (
        <a
          className="btn btn-outline-secondary d-flex align-items-center"
          href="#"
          onClick={() => updateStoryState(story, 'started')}
        >
          Start
        </a>
      )}
      {story.state === 'started' && (
        <a
          className="btn btn-outline-secondary d-flex align-items-center"
          href="#"
          onClick={() => updateStoryState(story, 'finished')}
        >
          Finish
        </a>
      )}
      {story.state === 'finished' && (
        <a
          className="btn btn-outline-secondary d-flex align-items-center"
          href="#"
          onClick={() => updateStoryState(story, 'delivered')}
        >
          Deliver
        </a>
      )}
      {story.state === 'delivered' && (
        <a
          className="btn btn-outline-secondary d-flex align-items-center"
          href="#"
          onClick={() => updateStoryState(story, 'accepted')}
        >
          Accept
        </a>
      )}
      {story.state === 'delivered' && (
        <a
          className="btn btn-outline-secondary d-flex align-items-center"
          href="#"
          onClick={() => updateStoryState(story, 'rejected')}
        >
          Reject
        </a>
      )}
      {story.state === 'rejected' && (
        <a
          className="btn btn-outline-secondary d-flex align-items-center"
          href="#"
          onClick={() => updateStoryState(story, 'unstarted')}
        >
          Restart
        </a>
      )}
      {story.state === 'accepted' && (
        <a
          className="btn btn-outline-secondary d-flex align-items-center"
          href="#"
          onClick={() => updateStoryState(story, 'unstarted')}
        >
          Restart
        </a>
      )}
      <a
        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
      >
        <img src={threeDots} alt="pic" />
      </a>
      <div className="dropdown-menu dropdown-menu-end">
        <Link
          className="dropdown-item"
          to={`/projects/${id}/stories/${story.id}/edit`}
        >
          Edit
        </Link>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#" onClick={() => onDelete(story)}>
          Remove
        </a>
      </div>
    </div>
  )
}

export default Actions
