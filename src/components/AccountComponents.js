import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Layout from './layout'
import { Card, CardHeader, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AccountComponents({ accounts }) {
  const navigate = useNavigate()
  const pageName = "Управления"

  return (
    <Layout pageName={pageName}>
      <Grid container spacing={2}>
        {accounts.map((account, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
            <Card style={{ cursor: "pointer", borderRadius: "10px", boxShadow: "4px 8px 8px rgba(0,0,0,0.12)" }} onClick={async event => { navigate(`/account/${account.name.replace(' ', '_')}_id_${account.id}`); }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardHeader style={{ backgroundColor: "#D76223", border: "0px", borderRadius: "10px", color: "#FFFFFF", boxShadow: "0px 4px 4px rgba(0,0,0,0.2)", height: "38px" }}
                title={"Account " + account.id}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Количество подрядчиков: {account.amount}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}


{/**/ }