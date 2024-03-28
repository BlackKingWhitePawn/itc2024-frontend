import React, { useEffect } from 'react'
import Layout from '../components/layout'
import { Breadcrumbs, Grid, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import ChartLine from '../components/chart-line'
import CompanyCard from '../components/company-card'
import axios from 'axios'
import URLS from '../urls'
import BreadcrumbsNavigation from '../components/navigation';

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

    let { companyId } = useParams();
    const [companyData, setCompanyData] = React.useState(null);

    useEffect(() => {
        axios
            .get(`${URLS.COMPANY(companyId)}`)
            .then(res => {
                setCompanyData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <Layout pageName={companyData?.name}>
            <BreadcrumbsNavigation items={[
                { name: 'Структура', path: '/accounts' },
                // TODO: получать айди динамически из ответа
                { name: 'Название управления', path: '/accounts/id' },
                { name: 'Название подрядчика' },
            ]} />
            <Grid container spacing={1}>
                <Grid container item xs={3}>
                    <CompanyCard {...companyData} />
                </Grid>
                <Grid container item xs>
                    <ChartLine data={data} height={500} />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default CompanyPage
