import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/TeacherDashboard.css'; // Asegúrate de crear este archivo para estilos

function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      <h2>Panel del Docente</h2>
      <div className="dashboard-links">
        <Link to="/teacher-dashboard/create-evaluation" className="dashboard-link">
          Crear Evaluación
        </Link>
        <Link to="/teacher-dashboard/view-reports" className="dashboard-link">
          Ver Reportes
        </Link>
      </div>
    </div>
  );
}

export default TeacherDashboard;
