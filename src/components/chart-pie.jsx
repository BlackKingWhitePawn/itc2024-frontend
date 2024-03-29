import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function ChartPie() {
    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 8, label: 'Регулярное обслуживание', color: '#4e79a7' },
                        { id: 1, value: 1.5, label: 'Инциденты', color: '#e15759' },
                        { id: 2, value: 1, label: 'Assigments', color: '#f28e2c' },
                    ],
                },
            ]}
            height={300}
        />
    );
}