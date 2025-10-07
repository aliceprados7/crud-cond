import React from "react";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Bem-vindo ao Sistema de Contatos! 👋</h1>
        <p>Gerencie seus contatos de forma simples e eficiente.</p>
        
        <div className="features">
          <div className="feature-card">
            <span className="feature-icon">📝</span>
            <h3>Criar</h3>
            <p>Adicione novos contatos facilmente</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">👁️</span>
            <h3>Visualizar</h3>
            <p>Veja todos os seus contatos</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">✏️</span>
            <h3>Editar</h3>
            <p>Atualize informações quando necessário</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🗑️</span>
            <h3>Deletar</h3>
            <p>Remova contatos indesejados</p>
          </div>
        </div>

        <div className="welcome-cta">
          <p>Use o menu acima para começar!</p>
        </div>
      </div>
    </div>
  );
}