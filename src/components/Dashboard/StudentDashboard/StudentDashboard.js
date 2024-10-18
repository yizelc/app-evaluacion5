import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid } from '@mui/material';
import Navbar from '../../Navbar';
import DashboardContent from '../DashboardContent';

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <Navbar />
      <DashboardContent
        title="Panel del Alumno"
        textLink1="Ver Retroalimentación"
        textLink2="Realizar Evaluación"
        link1={"/student-dashboard/view-feedback"}
        link2={"/evaluations"}
      />

    </div>
  );
}

export default StudentDashboard;
