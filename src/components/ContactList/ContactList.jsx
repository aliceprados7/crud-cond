import React from "react";
import "./ContactList.css";

export default function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div className="list-container">
      <h2>Lista de Contatos 📋</h2>
      
      {contacts.length === 0 ? (
        <p className="empty-message">Nenhum contato cadastrado ainda.</p>
      ) : (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-item">
              <div className="contact-info">
                <span className="contact-name">{contact.name}</span>
                <span className="contact-phone">{contact.phone}</span>
              </div>
              
              <div className="contact-actions">
                <button 
                  className="edit-btn" 
                  onClick={() => onEdit(contact)}
                >
                  ✏️ Alterar
                </button>
                <button 
                  className="delete-btn" 
                  onClick={() => {
                    if (window.confirm(`Deseja realmente remover ${contact.name}?`)) {
                      onDelete(contact.id);
                    }
                  }}
                >
                  🗑️ Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}