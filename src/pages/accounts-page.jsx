import React, { useEffect } from 'react'
import userStore from '../stores/user'
import { useNavigate } from 'react-router-dom'
import AccountComponents from '../components/AccountComponents'


function AnalysPage() {
    const navigate = useNavigate()
    useEffect(() => {
        // if (!userStore.token) {
        //     navigate('/login')
        // }
    })

    return (
        <div>
            <AccountComponents />
        </div>
    )
}

export default AnalysPage