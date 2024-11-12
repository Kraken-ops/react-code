import React, {useContext} from 'react'
import userContext from '../context/userContext'

function Profile() {

    const {user} = useContext(userContext)
    if(!user)
    {
        return (
            <div>No User</div>
          )
    }
  return (
    <div>User Details : {user.username}</div>
  )
}

export default Profile