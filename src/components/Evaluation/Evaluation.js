import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid } from '@mui/material';

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

        <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <Link to="/main" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {selectedEvaluation.title}
                      </Link>
                    </Typography>
                    <Button color="inherit" component={Link} to="/teacher-dashboard">
                      Panel del Docente
                    </Button>
                    <Button color="inherit" component={Link} to="/student-dashboard">
                      Panel del Estudiante
                    </Button>
                    <Button color="inherit" component={Link} to="/evaluations">
                      Evaluaciones
                    </Button>
                    <Button color="inherit" component={Link} to="/reports">
                      Reportes
                    </Button>
                  </Toolbar>
        </AppBar>
        <Container>
                <Box sx={{ mt: 5 }}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                      <Typography variant="h4" component="h2" align="center">
                      Evaluaciones Disponibles
                      </Typography>
                    </Grid>
                    <Grid item>
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
                    </Grid>
                    {/* <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/teacher-dashboard/view-reports"
                      >
                        Ver Reportes
                      </Button>
                    </Grid> */}
                  </Grid>
                </Box>
          </Container>
      </div>
    );
  }

  return (
    <div className="evaluation-list">

      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/main" style={{ color: 'inherit', textDecoration: 'none' }}>
                Plataforma Educativa
              </Link>
            </Typography>
            <Button color="inherit" component={Link} to="/teacher-dashboard">
              Panel del Docente
            </Button>
            <Button color="inherit" component={Link} to="/student-dashboard">
              Panel del Estudiante
            </Button>
            <Button color="inherit" component={Link} to="/evaluations">
              Evaluaciones
            </Button>
            <Button color="inherit" component={Link} to="/reports">
              Reportes
            </Button>
          </Toolbar>
        </AppBar>


      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4" component="h2" align="center">
              Evaluaciones Disponibles
              </Typography>
            </Grid>
            <Grid item>
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
            </Grid>
            {/* <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/teacher-dashboard/view-reports"
              >
                Ver Reportes
              </Button>
            </Grid> */}
          </Grid>
        </Box>
      </Container>

    </div>
  );
}

export default Evaluation;
