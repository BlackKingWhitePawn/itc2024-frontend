import React, { useEffect } from 'react'
import userStore from '../stores/user'
import { useNavigate } from 'react-router-dom'
import ProfileComponents from '../components/ProfileComponents'
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
            <ProfileComponents></ProfileComponents>
        </div>
    )
}

export default UserPage