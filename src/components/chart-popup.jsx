import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { Box, Stack, styled } from '@mui/system';
import ChartScatter from './chart-scatter';
import { Tab, Tabs, Typography } from '@mui/material';
import ChartLine from './chart-line';
import ChartPie from './chart-pie';
import mockData from '../data/mock-its';
import { DataGrid, selectedGridRowsCountSelector } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useGridApiRef } from '@mui/x-data-grid';
import { BarChart } from '@mui/x-charts';

const HIST_DATA = {
  x: ['Отключение светофора',
    'Ухудшение качества изображения камеры, связанное с отложениями на стекле',
    'Нестабильная работа',
    'Отсутствие данных, превышающее регламентные сроки',
    'Самопроизвольные переход в жёлтый мигающий',
    'Информация на ТПИ/ЗПИ либо не выводится, либо выводится некорректно',
    'Напряжение на нагрузке ниже номинального',
    'С объекта приходят некорректные данные',
    'Отсутствие данных с отдельного датчика/датчиков',
    'Отсутствие напряжения на батарее в ночное время'],
  y: [65.5, 64., 49.5, 48.45833333, 40.,
    34., 32., 23., 22.5, 18.]
}


export default function ChartPopup({ isOpened, setIsOpened, isCollapsed, catChosen, setCatChosen, data, chosen, setChosen }) {

  const [tabOpened, setTabOpened] = React.useState(0);

  const ref = useGridApiRef();
  useEffect(() => {
    if (ref.current && isOpened) {
      console.log(chosen)
      if (ref.current.selectRow){
      ref.current.selectRow(chosen, true, true)
      }
    }

  }, [chosen])

  const handleTabChange = (event, newValue) => {
    setTabOpened(newValue);
  };

  const resolveChart = () => {
    switch (tabOpened) {
      // case 0:
      //   return <ChartScatter />;
      case 0:
        // return <ChartLine data={{
        //   x: [1, 2, 3, 4, 5, 6, 7],
        //   y: [1, 2, 3, 4, 5, 6, 7]
        // }} />;
        return <BarChart
          xAxis={[{ scaleType: 'band', data: HIST_DATA.x }]}
          series={[{ data: HIST_DATA.y }]}
          height={300}
        />
      case 1:
        return <ChartPie />;
      default:
        return <BarChart
          xAxis={[{ scaleType: 'band', data: HIST_DATA.x }]}
          series={[{ data: HIST_DATA.y }]}
          height={300}
        />;
    }
  }

  const resolveTable = () => {

    return <DataGrid
      onRowClick={(e) => setChosen(e["id"])}
      columns={
        [
          { field: 'id', headerName: 'ID' },
          { field: 'object_type', headerName: 'Тип', flex: 1 },
          { field: 'customer_id', headerName: 'Подрядчик', flex: 1 },
          { field: 'score', headerName: 'Ср. оценка обслуживания', flex: 1 },
          { field: 'cords', headerName: 'Координаты', flex: 1 },
        ]}
      apiRef={ref}
      rows={
        data.map((data) => ({

          id: data.id,
          object_type: data.object_type,
          customer_id: data.customer_id,
          score: (data.history.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0) / data.history.length * 10).toFixed(1),
          cords: `${data.coords.lat.toFixed(6)}, ${data.coords.lon.toFixed(6)}`
        }))
      }
      style={{ width: isCollapsed ? "53vw" : '70vw' }}
      // disableRowSelectionOnClick
      // getRowClassName={(params) =>
      //   params.id === chosen ? classes.selectedRow : ''
      // }
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
    />
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ textAlign: 'center' }}>
        {/* <Anchor ref={setAnchor} aria-describedby="placement-popper">
                    Anchor
                </Anchor> */}
        <BasePopup
          id="placement-popper"
          open={isOpened}
          // anchor={anchor}
          placement='bottom'
          offset={4}
          style={{
            bottom: "1vh",
            top: 'none',
            width: isCollapsed ? '55vw' : '72vw',
            left: isCollapsed ? '23%' : '6%'
          }}
        >
          <PopupBody width='40vw'>
            <Box sx={{ borderColor: 'divider' }}>
              {/* TODO: fix tab indicator */}
              {
                catChosen == 1
                  ? null
                  : <Tabs value={tabOpened} onChange={handleTabChange} centered>
                    {/* <Tab label="Точечный" value={0} /> */}
                    <Tab label="Распределение по характеру инцидента" value={1} />
                    <Tab label="Распределение событий" value={2} />
                  </Tabs>
              }
            </Box>
            {
              catChosen == 1
                ? resolveTable()
                : resolveChart()
            }
          </PopupBody>
        </BasePopup>
      </div>
    </div>
  );
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const PopupBody = styled('div')(
  ({ theme }) => `
  height: max-content;
  padding: 12px 16px;
  margin: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  z-index: 1;
`,
);

const Button = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
    }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);
