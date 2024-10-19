import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Navbar from "../Navbar"; // Incluimos Navbar para la navegación
import { DataTable } from "primereact/datatable"; // Tabla interactiva de PrimeReact
import { Column } from "primereact/column"; // Columnas para la tabla
import { Card } from "primereact/card"; // Card para encapsular el contenido

function Report() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await api.get("/evaluations"); // Asumiendo que las evaluaciones incluyen reportes
        setReports(response.data);
      } catch (error) {
        console.error(error);
        alert("Error al obtener los reportes");
      }
    };

    fetchReports();
  }, []);

  return (
    <div>
      {/* Agregamos Navbar para la navegación */}
      <Navbar />

      {/* Card para encapsular la tabla de reportes */}
      <Card title="Reportes de Evaluaciones">
        {reports.length === 0 ? (
          <p>No hay reportes disponibles.</p>
        ) : (
          <DataTable
            value={reports}
            paginator
            rows={10}
            className="p-datatable-gridlines"
          >
            <Column field="title" header="Título" />
            <Column field="questions.length" header="Cantidad de Preguntas" />
            {/* Puedes agregar más columnas según los datos del reporte */}
          </DataTable>
        )}
      </Card>
    </div>
  );
}

export default Report;
