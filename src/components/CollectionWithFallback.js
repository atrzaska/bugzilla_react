import React from 'react'

const CollectionWithFallback = ({ data, Loading, Empty, children }) => {
  if (data.loading) {
    return <Loading />
  }

  if (data.collection.length === 0) {
    return <Empty />
  }

  return <>{children}</>
}

export default CollectionWithFallback
