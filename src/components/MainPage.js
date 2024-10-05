import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/MainPage.css'; // Para aplicar estilos (opcional)

function MainPage() {
  return (
    <div className="main-page-container">
      <h1>Bienvenido a la Plataforma</h1>
      <div className="links-container">
        <Link to="/teacher-dashboard" className="main-link">Panel del Docente</Link>
        <Link to="/student-dashboard" className="main-link">Panel del Estudiante</Link>
        <Link to="/evaluations" className="main-link">Evaluaciones</Link>
        <Link to="/reports" className="main-link">Reportes</Link>
      </div>
    </div>
  );
}

export default MainPage;
