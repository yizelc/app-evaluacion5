import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import Navbar from "../../Navbar"; // Importamos Navbar
import { DataTable } from "primereact/datatable"; // DataTable de PrimeReact
import { Column } from "primereact/column"; // Columnas para la tabla
import { Card } from "primereact/card"; // Card para encapsular el contenido

function ViewFeedback() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await api.get("/evaluations"); // Asumiendo que las evaluaciones tienen feedback
        setFeedback(response.data);
      } catch (error) {
        console.error(error);
        alert("Error al obtener la retroalimentación");
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <Navbar />

      {/* Card para encapsular el contenido */}
      <Card title="Retroalimentación de Evaluaciones">
        {feedback.length === 0 ? (
          <p>No hay retroalimentación disponible.</p>
        ) : (
          <DataTable
            value={feedback}
            paginator
            rows={10}
            className="p-datatable-gridlines"
          >
            <Column field="title" header="Título" />
            <Column field="questions.length" header="Preguntas Respondidas" />
          </DataTable>
        )}
      </Card>
    </div>
  );
}

export default ViewFeedback;
