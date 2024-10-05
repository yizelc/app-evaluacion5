import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/StudentDashboard.css'; // Crea este archivo para estilos

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <h2>Panel del Estudiante</h2>
      <div className="dashboard-links">
        <Link to="/student-dashboard/view-feedback" className="dashboard-link">
          Ver Retroalimentación
        </Link>
        <Link to="/evaluations" className="dashboard-link">
          Realizar Evaluaciones
        </Link>
      </div>
    </div>
  );
}

export default StudentDashboard;
