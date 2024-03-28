import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import './navigation.scss'

function BreadcrumbsNavigation({ items }) {
    const navigate = useNavigate()
    return (
        <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-navigation' style={{ marginBottom: '16px' }}>
            {items.slice(0, -1).map(({ name, path }) => <Link underline="hover" style={{ cursor: 'pointer' }} color="inherit" onClick={() => navigate(path)}>
                {name}
            </Link>)
            }
            <Typography color="text.primary">
                {items[items.length - 1].name}
            </Typography>
        </Breadcrumbs>
    )
}

export default BreadcrumbsNavigation
