import React from 'react'

const ProtectedRoute = ({ children }) => {
  const user = true

  if (!user) {
    return <div>ProtectedRoute</div>
  } else {
    return children
  }
}

export default ProtectedRoute
