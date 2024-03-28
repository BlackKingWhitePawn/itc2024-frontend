import React from 'react'
import Layout from '../components/layout'
import { Breadcrumbs, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ChartLine from '../components/chart-line'
import CompanyCard from '../components/company-card'

function CompanyPage() {
    const data = {
        x: [1, 2, 3, 4, 5, 6, 7],
        ys: [
            [1, 2, 3, 4, 5, 6, 7],
            [4, 2, 3, 4, 5, 6, 7],
            [7, 2, 3, 4, 5, 6, 7],
            [10, 2, 3, 4, 5, 6, 7],
            [10, 2, 3, 4, 5, 6, 7],
        ]
    }

    const company = {
        "id": 1,
        "name": "worker 1",
        "tasks": [
            {
                "name": "task 1"
            },
            {
                "name": "task 2"
            }
        ],
        "region": "region 1",
        "statistics": {
            "pointer_regulary": 10,
            "pointer_incidents": 20
        },
        "metrics": {
            "percent_compete_incident": 10,
            "pointer_task_tardiness": 10,
            "pointer_reaction_incident_speed": 10,
            "pointer_avg_speed_work": 10
        }
    }

    return (
        <Layout>
            <Breadcrumbs aria-label="breadcrumb" className='breadcrumb' style={{ marginBottom: '24px' }}>
                <Link underline="hover" color="inherit" href="/profile">
                    Структура
                </Link>
                <Link underline="hover" color="inherit" href="#">
                    Название управления
                </Link>
                <Typography color="text.primary">
                    Название подрядчика
                </Typography>
            </Breadcrumbs>
            <Grid container spacing={1}>
                <Grid container item xs={3}>
                    <CompanyCard {...company} />
                </Grid>
                <Grid container item xs>
                    <ChartLine data={data} height={500} />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default CompanyPage
