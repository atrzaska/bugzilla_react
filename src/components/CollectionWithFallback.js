import React from 'react'

const CollectionWithFallback = ({ data, Loading, Empty, children }) => {
  if (data.loading) {
    return <Loading />
  }

  if (data.collection.length === 0) {
    return <Empty />
  }

  return <React.Fragment>{children}</React.Fragment>
}

export default CollectionWithFallback
