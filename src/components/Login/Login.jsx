import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onLogin(username, password);
    
    if (!success) {
      setError("Usuário ou senha incorretos!");
      setPassword("");
    } else {
      setError("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sistema de Contatos</h1>
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Usuário:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              required
            />
          </div>

          <div className="input-group">
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <p className="hint">Dica: usuário: admin | senha: 1234</p>
      </div>
    </div>
  );
}