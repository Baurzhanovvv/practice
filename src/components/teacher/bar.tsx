import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarAnimation() {
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Статистика по возрастным категориям
      </Typography>
      <BarChart
        height={300}
        xAxis={[{ scaleType: 'band', data: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'] }]} // Возрастные категории
        series={[
          {
            label: 'Количество людей',
            data: data.slice(0, itemNb), // Количество людей в возрастных категориях для одного курса
          },
        ]}
        skipAnimation={skipAnimation}
      />
      <FormControlLabel
        checked={skipAnimation}
        control={
          <Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />
        }
        label="Пропустить анимацию"
        labelPlacement="end"
      />
      <Typography id="input-item-number" gutterBottom>
        Количество элементов
      </Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={6}
        aria-labelledby="input-item-number"
      />
    </Box>
  );
}

// Данные для одного курса
const data = [120, 200, 150, 80, 60, 30]; // Количество людей в возрастных группах
