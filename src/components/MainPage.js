import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box } from '@mui/material';

function MainPage() {
  return (
    <div className="main-page-container">
      {/* Reemplazo del navbar con AppBar de Material-UI */}
      <AppBar position="static">
        <Toolbar>
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
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h3" component="h1" align="center">
                Bienvenido a la Plataforma
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default MainPage;
