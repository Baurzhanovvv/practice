import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart'; // уточните путь импорта, если компонент не загружается
import '../../assets/styles/teacher.scss'
import BarAnimation from './bar';

const Teacher = () => {
    const [selectedChart, setSelectedChart] = React.useState('pie');

    const pieData = [
        { id: 0, value: 120, label: 'Мужчины' },
        { id: 1, value: 80, label: 'Женщины' },
        { id: 2, value: 120, label: 'Пенсионеры' },
        { id: 3, value: 80, label: 'Женщины' },
    ];

    const lineData = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];

    return (
        <div className='container'>
            <h2>Course Completion Statistics</h2>

            {/* Buttons to select chart */}
            <div className="chart-buttons">
                <button className="btn btn-transparent" onClick={() => setSelectedChart('pie')}>График 1 (PieChart)</button>
                <button className="btn btn-transparent" onClick={() => setSelectedChart('line')}>График 2 (LineChart)</button>
                <button className="btn btn-transparent" onClick={() => setSelectedChart('bar')}>График 3 (BarAnimation)</button>
            </div>

            {/* Render selected chart */}
            <div className="charts">
                {selectedChart === 'pie' && (
                    <PieChart
                        series={[
                            {
                                data: pieData,
                                innerRadius: 30,
                                outerRadius: 100,
                                paddingAngle: 5,
                                cornerRadius: 5,
                                startAngle: -45,
                                endAngle: 225,
                                cx: 150,
                                cy: 150,
                            },
                        ]}
                        width={400}
                        height={500}
                    />
                )}

                {selectedChart === 'line' && (
                    <LineChart
                        xAxis={[{ scaleType: 'band', data: lineData }]}
                        series={[
                            { data: [10, 15, 20, 18, 10, 5], label: 'Course A' },  // Данные для курса A
                        ]}
                        width={900}
                        height={500}
                    />
                )}

                {selectedChart === 'bar' && <BarAnimation />}
            </div>
        </div>
    );
};

export default Teacher;
