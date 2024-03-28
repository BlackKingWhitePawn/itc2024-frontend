import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


/**
 * Renders a line chart based on the provided data.
 *
 * @param {Object} data - The data object containing the chart data.
 * @param {Array} data.x - The array of x-axis values.
 * @param {Array} data.y - The array of y-axis values.
 * @param {Array} data.ys - The array of arrays representing multiple sets of y-axis values.
 * @example
 * ```
 * const data = {
        x: [1, 2, 3, 4, 5, 6, 7],
        ys: [
            [1, 2, 3, 4, 5, 6, 7],
            [4, 2, 3, 4, 5, 6, 7],
            [7, 2, 3, 4, 5, 6, 7],
            [10, 2, 3, 4, 5, 6, 7],
        ]
    }
    <ChartLine data={data} />
 * ```
 * @return {ReactElement} The rendered line chart component.
 */
export default function ChartLine({ data, ...props }) {
    if (!data.ys) return (
        <LineChart
            xAxis={[{ data: data.x }]}
            series={[
                { data: data.y }
            ]}
            height={300}
            {...props}
        />
    );

    if (Array.isArray(data.ys)) return <LineChart
        height={300}
        xAxis={[{ data: data.x }]}
        series={data.ys.map((v) => ({ data: v }))}
        grid={{ horizontal: true, vertical: true }}
        {...props}
    />
}