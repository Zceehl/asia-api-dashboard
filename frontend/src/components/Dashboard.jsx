import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography, CircularProgress, useTheme, useMediaQuery } from '@mui/material';
import { fetchPerformanceData, formatChartData } from '../services/api';
import Header from './Header';
import Footer from './Footer';
import AttendanceTrendChart from './charts/AttendanceTrendChart';
import SubjectPerformanceChart from './charts/SubjectPerformanceChart';
import GradeDistributionChart from './charts/GradeDistributionChart';
import QuizExamScatterChart from './charts/QuizExamScatterChart';

const Dashboard = ({ mode, onModeChange }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [chartData, setChartData] = useState({
        attendance: null,
        subjects: null,
        grades: null,
        quizExam: null
    });

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const fetchData = async () => {
        try {
            setLoading(true);
            const [attendanceData, subjectsData, gradesData, quizExamData] = await Promise.all([
                fetchPerformanceData('attendance'),
                fetchPerformanceData('subjects'),
                fetchPerformanceData('grade-distribution'),
                fetchPerformanceData('quiz-exam')
            ]);

            setChartData({
                attendance: formatChartData(attendanceData, 'attendance'),
                subjects: formatChartData(subjectsData, 'subjects'),
                grades: formatChartData(gradesData, 'grades'),
                quizExam: formatChartData(quizExamData, 'quiz-exam')
            });
            setError(null);
        } catch (err) {
            console.error('Error fetching dashboard data:', err);
            setError('Failed to load dashboard data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                minHeight="100vh"
                bgcolor="background.default"
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box 
                display="flex" 
                flexDirection="column"
                justifyContent="center" 
                alignItems="center" 
                minHeight="100vh"
                bgcolor="background.default"
            >
                <Typography color="error" variant="h6" gutterBottom>
                    {error}
                </Typography>
                <Typography 
                    color="primary" 
                    sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                    onClick={fetchData}
                >
                    Click here to retry
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ 
            minHeight: '100vh', 
            bgcolor: 'background.default',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            overflow: 'hidden'
        }}>
            <Header onRefresh={fetchData} mode={mode} onModeChange={onModeChange} />
            <Box sx={{ 
                p: { xs: 2, sm: 3, md: 4 },
                flex: 1,
                width: '100%',
                overflow: 'auto',
                maxWidth: '1400px',
                mx: 'auto'
            }}>
                <Grid 
                    container 
                    spacing={{ xs: 2, sm: 3, md: 4 }}
                    justifyContent="center"
                    alignItems="stretch"
                    sx={{ width: '100%', m: 0 }}
                >
                    {/* Attendance Chart */}
                    <Grid item xs={12} sm={6} sx={{ width: '100%' }}>
                        <Paper 
                            elevation={3}
                            sx={{ 
                                p: { xs: 2, sm: 3 },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: theme.shadows[8]
                                }
                            }}
                        >
                            <Typography 
                                variant="h6" 
                                gutterBottom 
                                align="center"
                                sx={{ 
                                    color: 'text.primary',
                                    fontWeight: 600,
                                    mb: 3,
                                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                                }}
                            >
                                Attendance Trends
                            </Typography>
                            <Box 
                                sx={{ 
                                    flex: 1,
                                    minHeight: { xs: '300px', sm: '350px', md: '400px' },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    p: { xs: 1, sm: 2 }
                                }}
                            >
                                <AttendanceTrendChart data={chartData.attendance} />
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Subject Performance Chart */}
                    <Grid item xs={12} sm={6} sx={{ width: '100%' }}>
                        <Paper 
                            elevation={3}
                            sx={{ 
                                p: { xs: 2, sm: 3 },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: theme.shadows[8]
                                }
                            }}
                        >
                            <Typography 
                                variant="h6" 
                                gutterBottom 
                                align="center"
                                sx={{ 
                                    color: 'text.primary',
                                    fontWeight: 600,
                                    mb: 3,
                                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                                }}
                            >
                                Subject Performance
                            </Typography>
                            <Box 
                                sx={{ 
                                    flex: 1,
                                    minHeight: { xs: '300px', sm: '350px', md: '400px' },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    p: { xs: 1, sm: 2 }
                                }}
                            >
                                <SubjectPerformanceChart data={chartData.subjects} />
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Grade Distribution Chart */}
                    <Grid item xs={12} sm={6} sx={{ width: '100%' }}>
                        <Paper 
                            elevation={3}
                            sx={{ 
                                p: { xs: 2, sm: 3 },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: theme.shadows[8]
                                }
                            }}
                        >
                            <Typography 
                                variant="h6" 
                                gutterBottom 
                                align="center"
                                sx={{ 
                                    color: 'text.primary',
                                    fontWeight: 600,
                                    mb: 3,
                                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                                }}
                            >
                                Grade Distribution
                            </Typography>
                            <Box 
                                sx={{ 
                                    flex: 1,
                                    minHeight: { xs: '300px', sm: '350px', md: '400px' },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    p: { xs: 1, sm: 2 }
                                }}
                            >
                                <GradeDistributionChart data={chartData.grades} />
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Quiz vs Exam Chart */}
                    <Grid item xs={12} sm={6} sx={{ width: '100%' }}>
                        <Paper 
                            elevation={3}
                            sx={{ 
                                p: { xs: 2, sm: 3 },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: theme.shadows[8]
                                }
                            }}
                        >
                            <Typography 
                                variant="h6" 
                                gutterBottom 
                                align="center"
                                sx={{ 
                                    color: 'text.primary',
                                    fontWeight: 600,
                                    mb: 3,
                                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                                }}
                            >
                                Quiz vs Exam Comparison
                            </Typography>
                            <Box 
                                sx={{ 
                                    flex: 1,
                                    minHeight: { xs: '300px', sm: '350px', md: '400px' },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    p: { xs: 1, sm: 2 }
                                }}
                            >
                                <QuizExamScatterChart data={chartData.quizExam} />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default Dashboard;