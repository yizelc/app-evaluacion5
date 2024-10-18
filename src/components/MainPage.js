import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box } from '@mui/material';
import Navbar from './Navbar';

function MainPage() {
  return (
    <div className="main-page-container">

      <Navbar />
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
