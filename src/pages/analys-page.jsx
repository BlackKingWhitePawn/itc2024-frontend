import React, { useEffect } from 'react'
import userStore from '../stores/user'
import { useNavigate } from 'react-router-dom'
import AnalyticsDash from '../components/AnalyticsDash'


function AnalysPage() {
    const navigate = useNavigate()
    useEffect(() => {
        // if (!userStore.token) {
        //     navigate('/login')
        // }
    })

    return (
        <div>
            <AnalyticsDash/>
        </div>
    )
}

export default AnalysPage