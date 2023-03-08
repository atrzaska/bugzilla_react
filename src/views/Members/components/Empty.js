import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Empty = () => {
  const { id } = useParams()

  return (
    <>
      <h1 className="text-center text-secondary p-4">
        This project does not have any members yet
      </h1>
      <div className="text-center">
        <Link className="btn btn-primary" to={`/projects/${id}/members`}>
          Create member
        </Link>
      </div>
    </>
  )
}

export default Empty
