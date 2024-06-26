import React, { useEffect } from 'react'
import Layout from '../components/layout'
import { Breadcrumbs, Chip, Grid, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import ChartLine from '../components/chart-line'
import CompanyCard from '../components/company-card'
import axios from 'axios'
import URLS from '../urls'
import BreadcrumbsNavigation from '../components/navigation';
import { Box, Stack } from '@mui/system'
import Button from '@mui/material/Button';
import { InsightsRounded, StackedBarChartRounded } from '@mui/icons-material'
import { BarChart } from '@mui/x-charts'
function CompanyPage() {
    const data1 = {
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ys: [[0.8265797781967493,
            0.6984861191688058,
            0.6168909598002761,
            0.546995881002177,
            0.4948335527747624,
            0.4460363625375766,
            0.40620900027257417,
            0.3659145299485177,
            0.3157735102993785,
            0.2702546842445895],
        [0.8717453981179735,
            0.772637651769195,
            0.706688282653015,
            0.6482647617776479,
            0.6032191967161754,
            0.5598582146604117,
            0.5235030571161797,
            0.4856035324462853,
            0.4368157046898169,
            0.39058629516403043],
        [0.8820673766546492,
            0.7900233176069208,
            0.7281839936547436,
            0.6729947197691216,
            0.6301364017188885,
            0.5886201603479365,
            0.5536048890359183,
            0.5168603488024889,
            0.4692036852877602,
            0.4236174909131559],
        [0.9017386473013241,
            0.8236043019225493,
            0.7701616642872567,
            0.7218021022349785,
            0.6837405160982117,
            0.6464338202680334,
            0.6146185689857994,
            0.5808171621896117,
            0.5363585929135178,
            0.493073422272939],
        [0.6813431575297533,
            0.48188257811382584,
            0.3739694555522089,
            0.2923538949019285,
            0.23837173063085046,
            0.1929183026398831,
            0.15933258596725328,
            0.1288996178456643,
            0.0954507576924455,
            0.06951940386278842],
        [0.6515926562131374,
            0.44176712164361515,
            0.332573037321133,
            0.25237813647093266,
            0.20082385925511662,
            0.15847315137780077,
            0.12790403750798676,
            0.10091080466168216,
            0.07208813186878774,
            0.050555034578781945],
        [0.6087455288479271,
            0.38662783177014587,
            0.27777798753749516,
            0.2013676366413545,
            0.1543510974899432,
            0.11716404227850082,
            0.09127098866726513,
            0.0692953335569709,
            0.04684577299021368,
            0.03100000634330684],
        [0.8690173266305273,
            0.7680698176511619,
            0.7010678544690979,
            0.6418288008526222,
            0.5962417248217821,
            0.5524330888651129,
            0.5157605536650169,
            0.47759737688643317,
            0.4285680810412737,
            0.3822266801910584]]
    }

    const data2 = {
        x: [0, 23, 46, 69, 92, 115, 138, 161, 184, 207],
        ys: [[0.19260751875609855,
            0.3596851976043061,
            0.48383464345083693,
            0.6036276698289815,
            0.7039728805321176,
            0.8078775080986659,
            0.9011695485324583,
            1.00615897265264,
            1.1536038808345075,
            1.309475241043004],
        [0.13836022814492227,
            0.2583810140034188,
            0.3475641661582606,
            0.4336178704315574,
            0.5057011740107776,
            0.5803413960969448,
            0.6473580322173149,
            0.7227775213830898,
            0.8286950435369562,
            0.9406657344995284],
        [0.1264057554686268,
            0.23605661620940757,
            0.31753424799965263,
            0.39615281957461634,
            0.4620080481166061,
            0.530199274653654,
            0.5914256012602306,
            0.6603287653622157,
            0.7570948995666271,
            0.8593912022775699],
        [0.10405171266248088,
            0.19431152569627239,
            0.26138036366197837,
            0.3260957477766135,
            0.3803049037772186,
            0.4364369515896781,
            0.48683579711556807,
            0.5435538809250902,
            0.6232075482313659,
            0.7074134094016272],
        [0.3928225144184465,
            0.7335769892811909,
            0.9867794488531222,
            1.2310970026826142,
            1.4357507889565042,
            1.6476639963120774,
            1.837932860866823,
            2.052058507864332,
            2.3527719999660746,
            2.670671218222767],
        [0.43984540471346534,
            0.8213899557578901,
            1.1049020616506453,
            1.3784656925485046,
            1.6076175974057043,
            1.8448979136610797,
            2.0579429471372053,
            2.2977005435229008,
            2.634410998706727,
            2.990364400510123],
        [0.5120794590298037,
            0.9562835480139277,
            1.286355714866596,
            1.6048456084046747,
            1.8716302154903557,
            2.1478781305177455,
            2.3959106990573904,
            2.6750427280380147,
            3.067049796640984,
            3.4814600041411485],
        [0.141546317980732,
            0.2643308822099111,
            0.3555676991961552,
            0.44360300494695,
            0.5173462066337738,
            0.5937052062625898,
            0.6622650678172927,
            0.7394212790966025,
            0.8477778167485868,
            0.9623269125401158]]

    }

    const dataset = [data1, data2]

    const titles = [
        'Функция выживаемости',
        'Накопленный риск'
    ]

    const [selectedChart, setSelectedChart] = React.useState(0);

    let { companyId } = useParams();
    const [companyData, setCompanyData] = React.useState(null);

    const [showedMetrics, setShowedMetrics] = React.useState(true);
    const [metricsRegular, setMetricsRegular] = React.useState([]);
    const [metricsIncident, setMetricsIncident] = React.useState([]);

    useEffect(() => {
        axios
            .get(`${URLS.COMPANY(companyId)}`)
            .then(res => {
                console.log(res.data);
                setCompanyData(res.data);
                setMetricsIncident([
                    res.data.metrixes.percent_compete_incident ?? 0,
                    res.data.metrixes.pointer_task_tardiness ?? 0,
                    res.data.metrixes.pointer_reaction_incident_speed_regular ?? 0,
                    0,
                    res.data.metrixes.pointer_avg_speed_work ?? 0
                ])
                setMetricsRegular([
                    res.data.metrixes.percent_compete_incident_regular ?? 0,
                    res.data.metrixes.pointer_task_tardiness_regular ?? 0,
                    0,
                    res.data.metrixes.speed_reaction_tardiness ?? 0,
                    res.data.metrixes.pointer_avg_speed_work_regular ?? 0
                ])
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function resolveTitle() {
        return <Typography style={{ marginLeft: '16px' }} variant='h5'>{titles[selectedChart]}</Typography>
    }

    return (
        <Layout pageName={companyData?.name} loaded={!!companyData}>
            <BreadcrumbsNavigation items={[
                { name: 'Структура', path: '/accounts' },
                // TODO: получать айди динамически из ответа
                { name: `Управление ${companyData?.AccountID}`, path: `/account/AccountName_id_${companyData?.AccountID}` },
                { name: companyData?.name },
            ]} />
            <Grid container spacing={1}>
                <Grid container item xs={3}>
                    <Stack spacing={2} style={{ width: '100%' }}>
                        <CompanyCard {...companyData} />
                        <Box display="flex" flexWrap={'wrap'} m={4}>
                            {[
                                'Выполнение в срок', 'Компетенции специалистов', 'Нет повторных заявок'
                            ].map(title => <Chip variant='outlined' color='primary' style={{ marginTop: '8px', fontSize: '12px' }} label={title} />)}
                        </Box>
                    </Stack>
                </Grid>
                <Grid container item xs>
                    {showedMetrics ? <>
                        <Box flexDirection={'row'} display={'flex'} justifyContent={'space-between'} width={'100%'}>
                            <Typography style={{ marginLeft: '16px' }} variant='h5'>Критерии оценки качества обслуживания </Typography>
                            <Button onClick={() => setShowedMetrics(!showedMetrics)}>
                                <StackedBarChartRounded />
                            </Button>
                        </Box>
                        <BarChart
                            xAxis={[{
                                data: ['Выполнение вовремя',
                                    'Среднее время задержки',
                                    'Качество обслуживания',
                                    'Скорость обработки задачи',
                                    'Скорость реагирования'],
                                scaleType: 'band'
                            }]}
                            series={[
                                { data: metricsRegular, label: 'Качество регулярного обслуживания' },
                                { data: metricsIncident, label: 'Качество инцидентного реагирования' }]}
                            height={500}
                            grid={{ horizontal: true, vertical: true }}
                        />
                    </> : <>
                        <Box flexDirection={'row'} display={'flex'} justifyContent={'space-between'} width={'100%'}>
                            <Stack spacing={2} direction={'row'} style={{ width: '100%' }}>
                                {resolveTitle()}
                                <Button variant='text' onClick={() => setSelectedChart(Math.abs(selectedChart - 1))}>{titles[Math.abs(selectedChart - 1)]}</Button>
                            </Stack>
                            <Button onClick={() => setShowedMetrics(!showedMetrics)}>
                                <InsightsRounded />
                            </Button>
                        </Box>
                        <ChartLine
                            data={dataset[selectedChart]}
                            height={500}
                            title='Функция выживаемости'
                            xAxis={[{
                                data: dataset[selectedChart].x,
                                label: 'Дни',
                            }]}
                            yAxis={[{
                                data: dataset[selectedChart].ys,
                                label: 'Вероятность',
                            }]}
                        /></>}
                </Grid>
            </Grid>
        </Layout>
    )
}

export default CompanyPage
