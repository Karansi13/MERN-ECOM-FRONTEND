import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInUser } from '../authSlice'
import { Navigate } from 'react-router-dom'
import { selectUserInfo } from '../../user/userSlice'

const ProtectedAdmin = ({children}) => {
    const user = useSelector(selectLoggedInUser);
    const userInfo = useSelector(selectUserInfo)
    if(!user){
        return <Navigate to="/login" repla={true} />
    }
    if(userInfo && userInfo.role!=='admin'){
        return <Navigate to="/login" repla={true} />
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedAdmin
