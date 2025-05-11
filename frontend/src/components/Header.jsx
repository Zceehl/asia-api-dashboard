import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Box, 
    useTheme, 
    useMediaQuery,
    IconButton,
    Tooltip
} from '@mui/material';
import { Refresh as RefreshIcon, DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material';

const Header = ({ onRefresh, mode, onModeChange }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar 
            position="static" 
            elevation={0}
            sx={{ 
                bgcolor: 'background.paper',
                borderBottom: `1px solid ${theme.palette.divider}`,
                mb: 3
            }}
        >
            <Toolbar>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        width: '100%'
                    }}
                >
                    <Typography 
                        variant={isMobile ? "h6" : "h5"} 
                        component="h1"
                        sx={{ 
                            fontWeight: 'bold',
                            color: 'text.primary',
                            letterSpacing: '0.5px'
                        }}
                    >
                        Student Performance Dashboard
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Tooltip title="Toggle dark mode">
                            <IconButton 
                                onClick={onModeChange}
                                sx={{ 
                                    color: 'primary.main',
                                    '&:hover': {
                                        bgcolor: 'action.hover'
                                    }
                                }}
                                aria-label="toggle dark mode"
                            >
                                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                            </IconButton>
                        </Tooltip>
                        
                        <Tooltip title="Refresh data">
                            <IconButton 
                                onClick={onRefresh}
                                sx={{ 
                                    color: 'primary.main',
                                    '&:hover': {
                                        bgcolor: 'action.hover'
                                    }
                                }}
                                aria-label="refresh data"
                            >
                                <RefreshIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;