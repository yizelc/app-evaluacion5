import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Message } from "primereact/message";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { username };
      login(userData);
      setMessage("Inicio de sesión exitoso");
      navigate("/main");
    } catch (error) {
      console.error(error);
      setMessage("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        {/* <Card title="Iniciar Sesión"> */}
        <div className="text-center mb-5">
          <img
            src="/images/logoapp.png"
            alt="hyper"
            height={100}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">
            Bienvenido a EvaluAPP
          </div>
          <span className="text-600 font-medium line-height-3">
            ¿No tiene cuenta?
          </span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Crear una
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-field">
            <label
              htmlFor="username"
              className="block text-900 font-medium mb-2"
            >
              Usuario
            </label>
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full mb-3"
            />
          </div>
          <div className="p-field">
            <label htmlFor="password">Contraseña</label>
            <InputText
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mb-3"
            />
          </div>
          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
              <label htmlFor="rememberme">Remember me</label>
            </div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Recuperar contraseña
            </a>
          </div>
          <Button label="Entrar" icon="pi pi-user" className="w-full" />
        </form>
        {message && (
          <Message
            severity={
              message === "Inicio de sesión exitoso" ? "success" : "error"
            }
            text={message}
          />
        )}
        {/* </Card> */}
      </div>
    </div>
  );
}

export default Login;
