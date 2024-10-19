import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const items = [
    {
      label: "Docente",
      icon: "pi pi-users",
      command: () => {
        navigate("/teacher-dashboard");
      },
    },
    {
      label: "Estudiante",
      icon: "pi pi-user",
      command: () => {
        navigate("/student-dashboard");
      },
    },
    {
      label: "Evaluaciones",
      icon: "pi pi-list",
      command: () => {
        navigate("/evaluations");
      },
    },
    {
      label: "Reportes",
      icon: "pi pi-chart-bar",
      command: () => {
        navigate("/reports");
      },
    },
    {
      label: "Perfil",
      icon: "pi pi-user",
      command: () => {
        navigate("/profile");
      },
    },
  ];

  const start = <Button icon="pi pi-home" onClick={() => navigate("/main")} />;
  const end = (
    <Button
      icon="pi pi-sign-out"
      onClick={() => navigate("/")}
      label="Salir"
      className="p-button-danger"
    />
  );

  return <Menubar model={items} start={start} end={end} />;
}

export default Navbar;
