import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" 
            color="default" 
            sx={{
              position: 'relative',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
            }
    }>
      <Toolbar
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#008080',
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="black" style={{ flexGrow: 1 }}>
          Helping Hands Foundation
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Causes</Button>
        <Button color="inherit">Events</Button>
        <Button color="inherit">Blog</Button>
        <Button color="inherit">Contact</Button>
        <div style={{ position: 'relative', marginLeft: '24px', marginRight: '24px', color: "#008080" }}>
          <SearchIcon style={{ position: 'absolute', left: '0px', top: '10px' }} />
          <InputBase
            placeholder="Search…"
            style={{ paddingLeft: '30px' }}
          />
        </div>
        <Button variant="outlined" color="primary">
          SPONSOR A CHILD
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
