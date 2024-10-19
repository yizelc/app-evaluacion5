import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import Navbar from "../../Navbar"; // Importamos Navbar
import { DataTable } from "primereact/datatable"; // Tabla interactiva de PrimeReact
import { Column } from "primereact/column"; // Columnas de la tabla
import { Card } from "primereact/card"; // Card para título y contenedor visual

function ViewReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await api.get("/evaluations");
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
      {/* Integrar Navbar */}
      <Navbar />

      {/* Card para el título y tabla */}
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
          </DataTable>
        )}
      </Card>
    </div>
  );
}

export default ViewReports;
