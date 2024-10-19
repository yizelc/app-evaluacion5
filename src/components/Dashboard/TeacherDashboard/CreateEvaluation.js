import React, { useState } from "react";
import api from "../../../services/api";
import { InputText } from "primereact/inputtext"; // Importar InputText de PrimeReact
import { Button } from "primereact/button"; // Importar Button de PrimeReact
import Navbar from "../../Navbar"; // Importar Navbar para usar en la vista
import { Card } from "primereact/card"; // Opcional: para mejorar el diseño

function CreateEvaluation() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([""]);

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/evaluations", { title, questions });
      alert("Evaluación creada exitosamente");
      setTitle("");
      setQuestions([""]);
    } catch (error) {
      console.error(error);
      alert("Error al crear la evaluación");
    }
  };

  return (
    <div>
      <Navbar />

      <Card title="Crear Nueva Evaluación">
        <form onSubmit={handleSubmit}>
          <div className="p-field">
            <label htmlFor="title">Título de la Evaluación</label>
            <InputText
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título de la evaluación"
              required
            />
          </div>
          <div className="p-field">
            <label>Preguntas</label>
            {questions.map((question, index) => (
              <InputText
                key={index}
                type="text"
                value={question}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                placeholder={`Pregunta ${index + 1}`}
                required
              />
            ))}
            <Button
              type="button"
              label="Añadir Pregunta"
              icon="pi pi-plus"
              onClick={addQuestion}
              className="p-button-secondary p-mt-2"
            />
          </div>
          <Button
            type="submit"
            label="Crear Evaluación"
            icon="pi pi-check"
            className="p-button-success p-mt-4"
          />
        </form>
      </Card>
    </div>
  );
}

export default CreateEvaluation;
