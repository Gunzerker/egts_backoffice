import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NextRouter } from 'next/router';
import * as React from 'react';
import BaseDrawer from '../drawer/BaseDrawer';
import ToolbarLayout from '../toolbar/ToolbarLayout';
export interface IBaseLayout {
  children?: React.ReactNode;
  router: NextRouter;
}

const drawerWidth = 240;

const BaseLayout: React.FC<IBaseLayout> = ({ children, router }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Grid container>
            <Grid item md={3}>
              <Typography variant="h6" color="initial" sx={{ color: 'white' }}>
                Dashboard
              </Typography>
            </Grid>
            <Grid item md={9}>
              <ToolbarLayout />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <BaseDrawer
        router={router}
        mobileIsOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#F7F6FA',
          height: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
export default BaseLayout;
