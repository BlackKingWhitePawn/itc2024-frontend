import React, { useEffect } from 'react'
import userStore from '../stores/user'
import { useNavigate } from 'react-router-dom'

function UserPage() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!userStore.token) {
            navigate('/login')
        }
    })

    return (
        <div>UserPage</div>
    )
}

export default UserPage