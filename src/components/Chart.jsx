import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MyChart = () => {
    const data = {
        labels: Array.from({ length: 22 }, (_, i) => i + 1), 
        datasets: [
            {
                label: 'Today',
                data: [0, 10, 30, 50, 40, 60, 45, 50, 55, 60, 50, 40, 30, 38, 45, 50, 48, 40, 35, 30, 25, 20],
                borderColor: 'rgba(0, 123, 255, 1)',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'Yesterday',
                data: [10, 20, 40, 30, 20, 40, 35, 40, 45, 50, 40, 30, 20, 28, 35, 40, 38, 30, 25, 20, 15, 10],
                borderColor: 'rgba(220, 220, 220, 1)',
                backgroundColor: 'rgba(220, 220, 220, 0.1)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
                max: 60,
            },
        },
    };

    return (
        <div>
            <h2>Today's trends</h2>
            <Line className='' data={data} options={options} />
        </div>
    );
};

export default MyChart;