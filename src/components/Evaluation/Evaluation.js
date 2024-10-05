import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import '../../styles/Evaluation.css'; // Crea este archivo para estilos

function Evaluation() {
  const [evaluations, setEvaluations] = useState([]);
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        const response = await api.get('/evaluations');
        setEvaluations(response.data);
      } catch (error) {
        console.error(error);
        alert('Error al obtener las evaluaciones');
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
      console.log('Respuestas:', responses);
      alert('Evaluación completada');
      setSelectedEvaluation(null);
      setResponses({});
    } catch (error) {
      console.error(error);
      alert('Error al enviar las respuestas');
    }
  };

  if (selectedEvaluation) {
    return (
      <div className="evaluation-container">
        <h3>{selectedEvaluation.title}</h3>
        <form onSubmit={handleSubmit}>
          {selectedEvaluation.questions.map((question, index) => (
            <div key={index} className="form-group">
              <label>{question}</label>
              <input
                type="text"
                value={responses[index] || ''}
                onChange={(e) => handleInputChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button type="submit" className="submit-button">Enviar Respuestas</button>
          <button type="button" onClick={() => setSelectedEvaluation(null)} className="cancel-button">Cancelar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="evaluation-list">
      <h3>Evaluaciones Disponibles</h3>
      {evaluations.length === 0 ? (
        <p>No hay evaluaciones disponibles.</p>
      ) : (
        <ul>
          {evaluations.map((evaluation) => (
            <li key={evaluation.id}>
              <strong>{evaluation.title}</strong>
              <button onClick={() => setSelectedEvaluation(evaluation)} className="start-button">Comenzar Evaluación</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Evaluation;
