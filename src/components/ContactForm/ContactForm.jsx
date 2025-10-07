import React, { useState, useEffect } from "react";
import "./ContactForm.css";

export default function ContactForm({ contactToEdit, onSave, onSubmit }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Preenche o formulário quando está editando
  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
    } else {
      setName("");
      setPhone("");
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.trim() === "" || phone.trim() === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Se está editando, chama onSave, senão chama onSubmit
    if (contactToEdit) {
      onSave(contactToEdit.id, name, phone);
    } else {
      onSubmit(name, phone);
    }

    // Limpa o formulário
    setName("");
    setPhone("");
  };

  return (
    <div className="form-container">
      <h2>{contactToEdit ? 'Alterar Contato' : 'Cadastrar Novo Contato'}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Telefone:</label>
          <input
            type="text"
            placeholder="(00) 00000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          {contactToEdit ? '💾 Salvar Alterações' : '➕ Adicionar Contato'}
        </button>
      </form>
    </div>
  );
}