import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container, Box, Grid } from '@mui/material';

function DashboardContent({ title, textLink1, textLink2, link1, link2 }) {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" align="center">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={link1}
            >
              {textLink1}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={link2}
            >
              {textLink2}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default DashboardContent;