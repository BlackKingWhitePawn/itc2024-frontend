import React, { useEffect } from 'react'
import userStore from '../stores/user'
import { useNavigate } from 'react-router-dom'
import ProfileComponents from '../components/ProfileComponents'
import { ProfileCard } from '../components/ProfileCard'
import { ProfileEdit } from '../components/ProfileEdit'
import backimg from "../assets/img/LooperGroup.svg"

function UserPage() {
    const navigate = useNavigate()
    useEffect(() => {
        // if (!userStore.token) {
        //     navigate('/login')
        // }
    })

    return (
        <div>
            <img src={backimg} style={{position:"fixed", right:"0", zIndex:"0"}}></img>
            <ProfileComponents style={{position:"relative", zIndex:"2"}}></ProfileComponents>
        </div>
    )
}

export default UserPage