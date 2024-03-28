import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import './company.scss'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


function CompanyCard({ id, name, tasks, region, statistics, metrics }) {
    const [statShowed, setStatShowed] = React.useState(false);

    return (
        <Card style={{ width: '100%', height: 'min-content' }} className='company-card'>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {`id-${id}`}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {region}
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
                {statShowed && <Stack className='company-card__stat'>
                    {Object.entries(statistics).map(([title, value]) => (
                        <Box key={title}>
                            <p><span className='company-card__stat-title'>{title}:</span> <span className='company-card__stat-value'>{value}</span></p>
                        </Box>
                    ))}
                </Stack>}
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => setStatShowed(!statShowed)}>{statShowed ? 'Свернуть' : 'Показать подробно'}</Button>
            </CardActions>
        </Card>
    );
}

export default CompanyCard