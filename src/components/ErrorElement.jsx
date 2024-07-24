import React from 'react'
import { useRouteError } from 'react-router'

const ErrorElement = () => {
    const error  = useRouteError()
  return (
    <div>There was an error</div>
  )
}

export default ErrorElement