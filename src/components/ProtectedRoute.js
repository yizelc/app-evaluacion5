import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext); // Verificamos si `user` está en el contexto

  // Si el usuario no está autenticado, redirigir al login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
