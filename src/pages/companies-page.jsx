import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Breadcrumbs, Stack, Typography } from '@mui/material';
import BreadcrumbsNavigation from '../components/navigation';
import axios from 'axios';
import URLS from '../urls';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70,
        flex: 1
    },
    {
        field: 'name',
        headerName: 'Компания подрядчика',
        width: 200,
        flex: 1,
        // align: 'center',
    },
    {
        field: 'pointer_regulary',
        headerName: 'Регулярность',
        description: '',
        sortable: false,
        width: 200,
        flex: 1,
        // align: 'center',
    },
    {
        field: 'pointer_incidents',
        headerName: 'Обработка инцидентов',
        description: '',
        sortable: false,
        width: 200,
        flex: 1,
    },
];

function CompaniesPage() {
    const navigate = useNavigate();
    const { accountInfo } = useParams()
    const [accountName, accountId] = accountInfo.split('_id_')
    const accountNameParsed = `Управление ${accountName}`
    const [page, setPage] = useState(1)
    const [rows, setRows] = useState([])

    useEffect(() => {
        axios
            .get(`${URLS.ACCOUNT(accountId, 1)}`)
            .then(res => {
                setRows(res.data.map(({ id, name, statistics }) => {
                    return {
                        'id': id,
                        'name': name,
                        'pointer_regulary': statistics.pointer_regulary,
                        'pointer_incidents': statistics.pointer_incidents
                    }
                }))
                console.log(rows);
            })
            .catch(err => {
                console.log(err)
            })
    }, [page])

    return (
        <Layout pageName={accountNameParsed}>
            <Stack spacing={2}>
                <BreadcrumbsNavigation items={[{ name: 'Структура', path: '/accounts' }, { name: accountNameParsed }]} />
                <div style={{ width: '100%', backgroundColor: "#F8F8F8" }}>
                    <DataGrid
                        onRowClick={params => navigate(`/company/${params.row.id}/`)}
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[10, 10]}
                        checkboxSelection
                    />
                </div>
            </Stack>
        </Layout>
    );
}

export default CompaniesPage
