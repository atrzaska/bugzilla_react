import React from 'react'
import { Link } from 'react-router-dom'

const Empty = () => (
  <React.Fragment>
    <h5 className="text-center text-secondary p-4">
      You don't have any projects yet
    </h5>
    <div className="text-center">
      <Link className="btn btn-primary" to={`/projects/new`}>
        Create project
      </Link>
    </div>
  </React.Fragment>
)

export default Empty
