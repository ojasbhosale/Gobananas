import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => (
  <AppBar position="static" style={{ backgroundColor: '#cc6c5c' }}>
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        GoBananas
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
