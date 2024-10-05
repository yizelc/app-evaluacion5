import React, { useState } from 'react';
import api from '../../../services/api';
import '../../../styles/CreateEvaluation.css'; // Crea este archivo para estilos

function CreateEvaluation() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState(['']);

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/evaluations', { title, questions });
      alert('Evaluación creada exitosamente');
      setTitle('');
      setQuestions(['']);
    } catch (error) {
      console.error(error);
      alert('Error al crear la evaluación');
    }
  };

  return (
    <div className="create-evaluation">
      <h3>Crear Nueva Evaluación</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título de la Evaluación</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título de la evaluación"
            required
          />
        </div>
        <div className="form-group">
          <label>Preguntas</label>
          {questions.map((question, index) => (
            <input
              key={index}
              type="text"
              value={question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              placeholder={`Pregunta ${index + 1}`}
              required
            />
          ))}
          <button type="button" onClick={addQuestion} className="add-question-button">
            Añadir Pregunta
          </button>
        </div>
        <button type="submit" className="submit-button">Crear Evaluación</button>
      </form>
    </div>
  );
}

export default CreateEvaluation;
