// import React from 'react'

import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"

function Profile() {
  const user=useSelector(store=> store.user)
  return (
    <div>
      {user && <EditProfile user={user}></EditProfile>}
    </div>
  )
}

export default Profile