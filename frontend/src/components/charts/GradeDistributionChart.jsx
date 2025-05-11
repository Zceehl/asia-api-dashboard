import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Box, useTheme } from '@mui/material';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const GradeDistributionChart = ({ data }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    if (!data) return null;

    // Define vibrant colors for grades
    const gradeColors = {
        'A': {
            light: 'rgba(75, 192, 192, 0.9)',    // Vibrant Teal
            dark: 'rgba(75, 192, 192, 0.7)'
        },
        'B': {
            light: 'rgba(54, 162, 235, 0.9)',    // Vibrant Blue
            dark: 'rgba(54, 162, 235, 0.7)'
        },
        'C': {
            light: 'rgba(255, 206, 86, 0.9)',    // Vibrant Yellow
            dark: 'rgba(255, 206, 86, 0.7)'
        },
        'D': {
            light: 'rgba(255, 159, 64, 0.9)',    // Vibrant Orange
            dark: 'rgba(255, 159, 64, 0.7)'
        },
        'F': {
            light: 'rgba(255, 99, 132, 0.9)',    // Vibrant Pink
            dark: 'rgba(255, 99, 132, 0.7)'
        }
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: theme.palette.text.primary,
                    font: {
                        size: 13,
                        weight: '500',
                        family: theme.typography.fontFamily
                    },
                    padding: 20,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                backgroundColor: theme.palette.background.paper,
                titleColor: theme.palette.text.primary,
                bodyColor: theme.palette.text.primary,
                borderColor: theme.palette.divider,
                borderWidth: 1,
                padding: 12,
                titleFont: {
                    size: 13,
                    weight: '600',
                    family: theme.typography.fontFamily
                },
                bodyFont: {
                    size: 13,
                    family: theme.typography.fontFamily
                },
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${label}: ${value} students (${percentage}%)`;
                    }
                }
            }
        }
    };

    // Update chart data with vibrant colors
    const chartData = {
        ...data,
        datasets: data.datasets.map(dataset => ({
            ...dataset,
            backgroundColor: dataset.data.map((_, index) => {
                const grade = data.labels[index];
                const color = gradeColors[grade] || {
                    light: theme.palette.primary.main + '90',
                    dark: theme.palette.primary.light + '70'
                };
                return isDarkMode ? color.dark : color.light;
            }),
            borderColor: dataset.data.map((_, index) => {
                const grade = data.labels[index];
                const color = gradeColors[grade] || {
                    light: theme.palette.primary.main,
                    dark: theme.palette.primary.light
                };
                return isDarkMode ? color.light : color.light;
            }),
            borderWidth: 2
        }))
    };

    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <Pie data={chartData} options={options} />
        </Box>
    );
};

export default GradeDistributionChart; 