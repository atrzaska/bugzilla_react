import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Empty = () => {
  const { id } = useParams()

  return (
    <>
      <h5 className="text-center text-secondary p-4">
        You don't have any stories yet
      </h5>
      <div className="text-center">
        <Link className="btn btn-primary" to={`/projects/${id}/stories/new`}>
          Create story
        </Link>
      </div>
    </>
  )
}

export default Empty
