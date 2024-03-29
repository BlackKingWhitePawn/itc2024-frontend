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
    // const magicValue1 = ((Math.random() * 100 - 50) / 10).toFixed(2)
    // const magicValue2 = ((Math.random() * 100 - 50) / 10).toFixed(2)

    function translateMetrics(name) {
        const t = {
            'pointer_regulary': 'Качество регулярного обслуживания',
            'pointer_incidents': 'Качество инцидентного обслуживания'
        }

        return t[name]
    }

    return (
        <Card style={{ width: '100%', height: 'min-content', borderRadius: "10px", boxShadow: "4px 8px 8px rgba(0,0,0,0.12)" }} className='company-card'>
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
                    Информация о подрядчике
                </Typography>
                {statShowed && <Stack className='company-card__stat'>
                    {Object.entries(statistics).map(([title, value]) => (
                        <Box key={title}>
                            <p>
                                <span className='company-card__stat-title'>{translateMetrics(title)}:</span>
                                {' '}
                                <span className='company-card__stat-value'>{value}</span>
                                {' '}
                                {' · '}<span className='company-card__stat-std'>+12.43%</span>
                            </p>
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