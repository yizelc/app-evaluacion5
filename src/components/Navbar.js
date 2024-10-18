import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExitToApp from '@mui/icons-material/ExitToApp';

function Navbar() {
  return (
    <div className="main-page-container">
      {/* Reemplazo del navbar con AppBar de Material-UI */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home" component={Link} to="/main">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/main" style={{ color: 'inherit', textDecoration: 'none' }}>
              Plataforma Educativa
            </Link>
          </Typography>
          <Button color="inherit" component={Link} to="/teacher-dashboard">
            Panel del Docente
          </Button>
          <Button color="inherit" component={Link} to="/student-dashboard">
            Panel del Estudiante
          </Button>
          <Button color="inherit" component={Link} to="/evaluations">
            Evaluaciones
          </Button>
          <Button color="inherit" component={Link} to="/reports">
            Reportes
          </Button>
          <IconButton edge="end" color="inherit" aria-label="profile" component={Link} to="/profile">
            <AccountCircle />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="logout" component={Link} to="/">
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;