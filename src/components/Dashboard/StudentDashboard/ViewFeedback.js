import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import '../../../styles/ViewFeedback.css'; // Crea este archivo para estilos

function ViewFeedback() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await api.get('/evaluations'); // Suponiendo que las evaluaciones incluyen feedback
        setFeedback(response.data);
      } catch (error) {
        console.error(error);
        alert('Error al obtener la retroalimentación');
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="view-feedback">
      <h3>Retroalimentación de Evaluaciones</h3>
      {feedback.length === 0 ? (
        <p>No hay retroalimentación disponible.</p>
      ) : (
        <ul>
          {feedback.map((fb) => (
            <li key={fb.id}>
              <strong>{fb.title}</strong>
              <p>Preguntas respondidas: {fb.questions.length}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewFeedback;
