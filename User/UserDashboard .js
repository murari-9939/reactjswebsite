import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';

const UserDashboard = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [rmsMenuOpen, setRmsMenuOpen] = useState(null); // State for RMS dropdown visibility

  const handleToggle = (event) => {
    setExpanded(event.currentTarget);
  };

  const handleClose = () => {
    setExpanded(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleRmsHover = (event) => {
    setRmsMenuOpen(event.currentTarget);
  };

  const handleRmsMenuClose = () => {
    setRmsMenuOpen(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <img
              src="/assests/image.png"
              alt="Logo"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            ></img>
            <Typography variant="h6">E-bax</Typography>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            {/* <Typography
              variant="body1"
              component={Link}
              to="/sharedfolder/profile-info"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Profile
            </Typography> */}

            <Typography
              variant="body1"
              component={Link}
              to="/home"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Home
            </Typography>

            <Typography
              variant="body1"
              component={Link}
              to="/about"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              About
            </Typography>

            <Typography
              variant="body1"
              component={Link}
              to="/dashboard"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Dashboard
            </Typography>

            {/* Add RMS with hover dropdown */}
            <Box
              sx={{ position: 'relative' }}
              onMouseEnter={handleRmsHover}
              onMouseLeave={handleRmsMenuClose}
            >
              <Typography
                variant="body1"
                component="span"
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                RMS
              </Typography>
              <Menu
                anchorEl={rmsMenuOpen}
                open={Boolean(rmsMenuOpen)}
                onClose={handleRmsMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{ mt: 1 }}
              >
                <MenuItem component={Link} to="/sharedfolder/User-Enquiry">
  Add User Enquiry
</MenuItem>



             
                <MenuItem component={Link} to="/sharedfolder/previous-history">Previous History</MenuItem>
              </Menu>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-controls="account-menu"
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="account-menu"
              anchorEl={expanded}
              open={Boolean(expanded)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
                            <MenuItem onClick={handleClose} component={Link} to="/sharedfolder/profile-info">
  Profile
</MenuItem>
              {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
              <MenuItem onClick={handleClose}>My Account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
              <MenuItem onClick={handleClose}>Setting</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <Box display="flex" justifyContent="flex-end" p={1}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            <ListItem button component={Link} to="/home" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard" onClick={toggleDrawer(false)}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            {/* <ListItem button component={Link} to="/sharedfolder/profile-info" onClick={toggleDrawer(false)}>
              <ListItemText primary="Profile Info" />
            </ListItem> */}
            <ListItem button component={Link} to="/rsms" onClick={toggleDrawer(false)}>
              <ListItemText primary="RSMS" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {children ? children : <Outlet />}
    </>
  );
};

export default UserDashboard;
