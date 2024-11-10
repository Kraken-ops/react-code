import React from 'react'
import { useParams } from 'react-router-dom'

function UserComponent() {
    const {id} = useParams();
  return (
    <div>User Id : {id}</div>
  )
}

export default UserComponent