import React from "react";
import "./Menu.css";

export default function Menu({ onNavigate, onCreate, onLogout }) {
  return (
    <nav className="menu">
      <div className="menu-logo">
        <h2>Contatos</h2>
      </div>
      
      <ul className="menu-items">
        <li>
          <button onClick={() => onNavigate('welcome')}>
            Início
          </button>
        </li>
        <li>
          <button onClick={() => onNavigate('list')}>
            Lista de Contatos
          </button>
        </li>
        <li>
          <button onClick={onCreate}>
            Novo Contato
          </button>
        </li>
        <li>
          <button onClick={onLogout} className="logout-btn">
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
}