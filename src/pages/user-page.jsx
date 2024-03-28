import React, { useEffect } from 'react'
import userStore from '../stores/user'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import { ProfileCard } from '../components/ProfileCard'
import { ProfileEdit } from '../components/ProfileEdit'

function UserPage() {
    const navigate = useNavigate()
    useEffect(() => {
        // if (!userStore.token) {
        //     navigate('/login')
        // }
    })

    return (
        <div>
            <Dashboard></Dashboard>
        </div>
    )
}

export default UserPage