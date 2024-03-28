import React, { useEffect } from 'react'
import userStore from '../stores/user'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../components/Dashboard'


function AnalysPage() {
    const navigate = useNavigate()
    useEffect(() => {
        // if (!userStore.token) {
        //     navigate('/login')
        // }
    })

    return (
        <div>
        </div>
    )
}

export default AnalysPage