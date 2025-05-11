import React from 'react';
import { Card, CardContent, CardHeader, Typography, useTheme } from '@mui/material';

const ChartCard = ({ title, children }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Card 
            sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: isDarkMode ? theme.palette.background.paper : theme.palette.background.paper,
                boxShadow: theme.shadows[isDarkMode ? 1 : 2],
                '&:hover': {
                    boxShadow: theme.shadows[isDarkMode ? 2 : 4]
                },
                transition: 'box-shadow 0.3s ease-in-out'
            }}
        >
            <CardHeader
                title={
                    <Typography 
                        variant="h6" 
                        component="div"
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            letterSpacing: '0.5px'
                        }}
                    >
                        {title}
                    </Typography>
                }
                sx={{
                    padding: theme.spacing(2),
                    '& .MuiCardHeader-content': {
                        overflow: 'hidden'
                    }
                }}
            />
            <CardContent 
                sx={{ 
                    flexGrow: 1,
                    padding: theme.spacing(2),
                    '&:last-child': {
                        paddingBottom: theme.spacing(2)
                    }
                }}
            >
                {children}
            </CardContent>
        </Card>
    );
};

export default ChartCard; 