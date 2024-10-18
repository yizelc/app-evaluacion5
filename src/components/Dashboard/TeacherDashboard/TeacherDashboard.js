import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid } from '@mui/material';
import Navbar from '../../Navbar';
import DashboardContent from '../DashboardContent';


function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      {/* Encabezado reutilizado */}
      <Navbar />

      {/* Contenido principal del dashboard del docente */}
      <DashboardContent
        title="Panel del Docente"
        textLink1="Crear Evaluación"
        textLink2="Ver Reportes"
        link1={"/teacher-dashboard/create-evaluation"}
        link2={"/teacher-dashboard/view-reports"}
      />
    </div>
  );
}

export default TeacherDashboard;
