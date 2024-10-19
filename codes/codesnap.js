import React from "react";
import Navbar from "../../Navbar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

function TeacherDashboard() {
  const navigate = useNavigate();

  return (
    <div className="teacher-dashboard">
      <Navbar />
      <Card title="Panel del Docente">
        <Button
          label="Crear Evaluación"
          onClick={() => navigate("/teacher-dashboard/create-evaluation")}
        />
        <Button
          label="Ver Reportes"
          onClick={() => navigate("/teacher-dashboard/view-reports")}
          className="p-button-secondary"
        />
      </Card>
    </div>
  );
}

export default TeacherDashboard;
