import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Empty = () => {
  const { id } = useParams()

  return (
    <React.Fragment>
      <h1 class="text-center text-secondary p-4">
        This project does not have any members yet
      </h1>
      <div class="text-center">
        <Link class="btn btn-primary" to={`/projects/${id}/members`}>
          Create member
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Empty
