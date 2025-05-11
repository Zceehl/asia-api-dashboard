import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: isDarkMode ? theme.palette.background.paper : theme.palette.background.paper,
                borderTop: `1px solid ${theme.palette.divider}`,
                textAlign: 'center'
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                    letterSpacing: '0.5px'
                }}
            >
                Submitted by: Team Wonderpets 2025
            </Typography>
        </Box>
    );
};

export default Footer; 