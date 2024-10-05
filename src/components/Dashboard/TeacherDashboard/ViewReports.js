import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import '../../../styles/ViewReports.css'; // Crea este archivo para estilos

function ViewReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await api.get('/evaluations');
        setReports(response.data);
      } catch (error) {
        console.error(error);
        alert('Error al obtener los reportes');
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="view-reports">
      <h3>Reportes de Evaluaciones</h3>
      {reports.length === 0 ? (
        <p>No hay reportes disponibles.</p>
      ) : (
        <ul>
          {reports.map((report) => (
            <li key={report.id}>
              <strong>{report.title}</strong>
              <p>Preguntas: {report.questions.length}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewReports;
