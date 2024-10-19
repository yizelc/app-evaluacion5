import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Navbar from "../Navbar"; // Incluimos el componente Navbar
import { Button } from "primereact/button"; // Reemplazamos Button de Material-UI por PrimeReact
import { InputText } from "primereact/inputtext"; // Para los campos de texto
import { Card } from "primereact/card"; // Para encapsular secciones
import { Menubar } from "primereact/menubar"; // Para reemplazar AppBar

function Evaluation() {
  const [evaluations, setEvaluations] = useState([]);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        const response = await api.get("/evaluations");
        setEvaluations(response.data);
      } catch (error) {
        console.error(error);
        alert("Error al obtener las evaluaciones");
      }
    };

    fetchEvaluations();
  }, []);

  const handleInputChange = (questionIndex, value) => {
    setResponses({
      ...responses,
      [questionIndex]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí podrías enviar las respuestas a la API
      console.log("Respuestas:", responses);
      alert("Evaluación completada");
      setSelectedEvaluation(null);
      setResponses({});
    } catch (error) {
      console.error(error);
      alert("Error al enviar las respuestas");
    }
  };

  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      command: () => {
        window.location = "/main";
      },
    },
    {
      label: "Panel del Docente",
      icon: "pi pi-users",
      command: () => {
        window.location = "/teacher-dashboard";
      },
    },
    {
      label: "Panel del Estudiante",
      icon: "pi pi-user",
      command: () => {
        window.location = "/student-dashboard";
      },
    },
    {
      label: "Evaluaciones",
      icon: "pi pi-list",
      command: () => {
        window.location = "/evaluations";
      },
    },
    {
      label: "Reportes",
      icon: "pi pi-chart-bar",
      command: () => {
        window.location = "/reports";
      },
    },
  ];

  if (selectedEvaluation) {
    return (
      <div className="evaluation-container">
        {/* Menubar de PrimeReact */}
        <Navbar />
        {/* Card para mostrar la evaluación */}
        <Card title={selectedEvaluation.title}>
          <form onSubmit={handleSubmit}>
            {selectedEvaluation.questions.map((question, index) => (
              <div key={index} className="p-field">
                <label>{question}</label>
                <InputText
                  value={responses[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  required
                />
              </div>
            ))}
            <Button
              label="Enviar Respuestas"
              icon="pi pi-check"
              className="p-button-success"
              type="submit"
            />
            <Button
              label="Cancelar"
              icon="pi pi-times"
              className="p-button-danger"
              onClick={() => setSelectedEvaluation(null)}
            />
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="evaluation-list">
      {/* Menubar de PrimeReact */}
      <Navbar />

      {/* Card para la lista de evaluaciones */}
      <Card title="Evaluaciones Disponibles">
        {evaluations.length === 0 ? (
          <p>No hay evaluaciones disponibles.</p>
        ) : (
          <ul>
            {evaluations.map((evaluation) => (
              <li key={evaluation.id}>
                <strong>{evaluation.title}</strong>
                <Button
                  label="Comenzar Evaluación"
                  onClick={() => setSelectedEvaluation(evaluation)}
                  className="p-button-info"
                />
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

export default Evaluation;
