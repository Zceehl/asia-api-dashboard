import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const AttendanceTrendChart = ({ data }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    if (!data) {
        return (
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100%' 
            }}>
                <CircularProgress />
            </Box>
        );
    }

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
                        return `Attendance: ${context.raw.toFixed(1)}%`;
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
                    text: 'Attendance Rate (%)',
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

    // Update chart data with theme-aware colors
    const chartData = {
        ...data,
        datasets: data.datasets.map(dataset => ({
            ...dataset,
            borderColor: isDarkMode ? theme.palette.primary.light : theme.palette.primary.main,
            backgroundColor: isDarkMode ? theme.palette.primary.light + '40' : theme.palette.primary.main + '40',
            pointBackgroundColor: isDarkMode ? theme.palette.primary.light : theme.palette.primary.main,
            pointBorderColor: isDarkMode ? theme.palette.background.paper : theme.palette.background.paper,
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
        }))
    };

    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <Line data={chartData} options={options} />
        </Box>
    );
};

export default AttendanceTrendChart; 