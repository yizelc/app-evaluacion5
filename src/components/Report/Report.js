import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import '../../styles/Report.css'; // Crea este archivo para estilos

function Report() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await api.get('/evaluations'); // Suponiendo que las evaluaciones incluyen reportes
        setReports(response.data);
      } catch (error) {
        console.error(error);
        alert('Error al obtener los reportes');
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="report-container">
      <h3>Reportes de Evaluaciones</h3>
      {reports.length === 0 ? (
        <p>No hay reportes disponibles.</p>
      ) : (
        <div className="reports-list">
          {reports.map((report) => (
            <div key={report.id} className="report-item">
              <h4>{report.title}</h4>
              <p>Preguntas: {report.questions.length}</p>
              {/* Aquí puedes agregar más detalles del reporte */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Report;
