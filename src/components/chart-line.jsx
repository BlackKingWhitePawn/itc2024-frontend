import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';




// /**
//  * Renders a line chart based on the provided data.
//  *
//  * @param {Object} data - The data object containing the chart data.
//  * @param {Array} data.x - The array of x-axis values.
//  * @param {Array} data.y - The array of y-axis values.
//  * @param {Array} data.ys - The array of arrays representing multiple sets of y-axis values.
//  * @example
//  * ```

//     <ChartLine data={data} />
//  * ```
//  * @return {ReactElement} The rendered line chart component.
//  */
export default function ChartLine({ title, ...props }) {
    const data = {
        x: [1, 2, 3, 4, 5, 6, 7],
        ys: [
            [1, 2, 3, 4, 5, 6, 7],
            [4, 2, 3, 4, 5, 6, 7],
            [7, 2, 3, 4, 5, 6, 7],
            [10, 2, 3, 4, 5, 6, 7],
        ]
    }

    function resolveTitle() {
        if (title) return <Typography style={{ marginLeft: '16px' }} variant='h5'>{title}</Typography> // title
        return <Typography style={{ marginLeft: '16px' }} variant='h5'>Функция выживаемости</Typography>
    }
    console.log("hui", data)
    if (data.ys===undefined) return (
        <>
            <LineChart
                xAxis={[{ data: data.x }]}
                series={[
                    { type: 'line', data: data.y, label: 'Функция выживаемости' },
                ]}
                height={300}
                {...props}
            />
        </>
    );
    
    if (Array.isArray(data.ys)) return <>
        <LineChart
            height={300}
            xAxis={[{ data: data.x }]}
            series={data.ys.map((yData) => (
                {
                    data: Array.isArray(yData[1]) ? yData[1] : yData,
                    label: Array.isArray(yData[1]) ? yData[0] : undefined
                }
            ))}
            grid={{ horizontal: true, vertical: true }}
            {...props}
        /></>
}