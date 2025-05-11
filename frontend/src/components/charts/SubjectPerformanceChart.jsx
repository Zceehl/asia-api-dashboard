import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Box, useTheme } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SubjectPerformanceChart = ({ data }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    if (!data) return null;

    // Define colors for each metric
    const metricColors = {
        'Quiz Average': {
            light: 'rgba(255, 99, 132, 0.9)',    // Vibrant Pink
            dark: 'rgba(255, 99, 132, 0.7)'
        },
        'Exam Score': {
            light: 'rgba(54, 162, 235, 0.9)',    // Vibrant Blue
            dark: 'rgba(54, 162, 235, 0.7)'
        },
        'Final Grade': {
            light: 'rgba(75, 192, 192, 0.9)',    // Vibrant Teal
            dark: 'rgba(75, 192, 192, 0.7)'
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
                        return `${context.dataset.label}: ${context.raw.toFixed(1)}%`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: theme.palette.divider,
                    drawBorder: false
                },
                ticks: {
                    color: theme.palette.text.secondary,
                    font: {
                        size: 12,
                        family: theme.typography.fontFamily
                    },
                    padding: 8
                },
                title: {
                    display: true,
                    text: 'Score (%)',
                    color: theme.palette.text.primary,
                    font: {
                        size: 13,
                        weight: '600',
                        family: theme.typography.fontFamily
                    },
                    padding: { top: 10, bottom: 10 }
                }
            },
            x: {
                grid: {
                    color: theme.palette.divider,
                    drawBorder: false
                },
                ticks: {
                    color: theme.palette.text.secondary,
                    font: {
                        size: 12,
                        family: theme.typography.fontFamily
                    },
                    padding: 8
                },
                title: {
                    display: true,
                    text: 'Subject',
                    color: theme.palette.text.primary,
                    font: {
                        size: 13,
                        weight: '600',
                        family: theme.typography.fontFamily
                    },
                    padding: { top: 10, bottom: 10 }
                }
            }
        }
    };

    // Update chart data with metric-specific colors
    const chartData = {
        ...data,
        datasets: data.datasets.map(dataset => {
            const metricColor = metricColors[dataset.label] || {
                light: theme.palette.primary.main + '80',
                dark: theme.palette.primary.light + '80'
            };
            return {
                ...dataset,
                backgroundColor: isDarkMode ? metricColor.dark : metricColor.light,
                borderColor: isDarkMode ? metricColor.light : metricColor.light,
                borderWidth: 2,
                borderRadius: 4
            };
        })
    };

    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <Bar data={chartData} options={options} />
        </Box>
    );
};

export default SubjectPerformanceChart; 