import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Box, useTheme } from '@mui/material';

ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const QuizExamScatterChart = ({ data }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    if (!data) return null;

    // Define vibrant colors for subjects
    const subjectColors = {
        'Mathematics': {
            light: 'rgba(54, 162, 235, 0.9)',    // Vibrant Blue
            dark: 'rgba(54, 162, 235, 0.7)'
        },
        'Science': {
            light: 'rgba(75, 192, 192, 0.9)',    // Vibrant Teal
            dark: 'rgba(75, 192, 192, 0.7)'
        },
        'English': {
            light: 'rgba(255, 99, 132, 0.9)',    // Vibrant Pink
            dark: 'rgba(255, 99, 132, 0.7)'
        },
        'Filipino': {
            light: 'rgba(153, 102, 255, 0.9)',   // Vibrant Purple
            dark: 'rgba(153, 102, 255, 0.7)'
        },
        'History': {
            light: 'rgba(255, 159, 64, 0.9)',    // Vibrant Orange
            dark: 'rgba(255, 159, 64, 0.7)'
        }
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
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
                        const label = context.dataset.label || '';
                        const x = context.parsed.x;
                        const y = context.parsed.y;
                        return `${label}: Quiz ${x.toFixed(1)}%, Exam ${y.toFixed(1)}%`;
                    }
                }
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Quiz Average (%)',
                    color: theme.palette.text.primary,
                    font: {
                        size: 13,
                        weight: '500',
                        family: theme.typography.fontFamily
                    }
                },
                grid: {
                    color: theme.palette.divider
                },
                ticks: {
                    color: theme.palette.text.secondary,
                    font: {
                        size: 12,
                        family: theme.typography.fontFamily
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Exam Score (%)',
                    color: theme.palette.text.primary,
                    font: {
                        size: 13,
                        weight: '500',
                        family: theme.typography.fontFamily
                    }
                },
                grid: {
                    color: theme.palette.divider
                },
                ticks: {
                    color: theme.palette.text.secondary,
                    font: {
                        size: 12,
                        family: theme.typography.fontFamily
                    }
                }
            }
        }
    };

    // Update chart data with vibrant colors
    const chartData = {
        ...data,
        datasets: data.datasets.map(dataset => {
            const subjectColor = subjectColors[dataset.label] || {
                light: theme.palette.primary.main + '90',
                dark: theme.palette.primary.light + '70'
            };
            return {
                ...dataset,
                backgroundColor: isDarkMode ? subjectColor.dark : subjectColor.light,
                borderColor: isDarkMode ? subjectColor.light : subjectColor.light,
                borderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            };
        })
    };

    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <Scatter data={chartData} options={options} />
        </Box>
    );
};

export default QuizExamScatterChart;