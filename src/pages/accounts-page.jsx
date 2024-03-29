import React, { useEffect } from 'react'
import userStore from '../stores/user'
import { useNavigate } from 'react-router-dom'
import AccountComponents from '../components/AccountComponents'
import axios from 'axios'
import URLS from '../urls'
import backimg from "../assets/img/LooperGroup.svg"


function AccountsPage() {
    const navigate = useNavigate()
    const [accountsData, setAccountsData] = React.useState([])

    useEffect(() => {
        axios
            .get(`${URLS.ACCOUNTS}`)
            .then(res => {
                setAccountsData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div>
            <img src={backimg} style={{position:"fixed", right:"0", zIndex:"0"}}></img>
            <AccountComponents accounts={accountsData} />
        </div>
    )
}

export default AccountsPage