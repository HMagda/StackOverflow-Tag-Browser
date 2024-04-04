import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AppHeader = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2E3B55' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          StackOverflow Tag Browser
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
