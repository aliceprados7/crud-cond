import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

function App() {
  // Gerenciamento de Estado (Lifting State Up)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState('welcome');
  const [contacts, setContacts] = useState([
    { id: 1, name: 'João Silva', phone: '11987654321' },
    { id: 2, name: 'Maria Souza', phone: '21912345678' },
  ]);
  const [contactToEdit, setContactToEdit] = useState(null);

  // Função de Login
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setActiveScreen('welcome');
      return true;
    }
    return false;
  };

  // Função de Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveScreen('welcome');
    setContactToEdit(null);
  };

  // Navegação entre telas
  const handleNavigate = (screen) => {
    setActiveScreen(screen);
    if (screen !== 'form') {
      setContactToEdit(null);
    }
  };

  // CREATE: Adicionar novo contato
  const handleSubmit = (name, phone) => {
    const newContact = {
      id: Date.now(),
      name: name,
      phone: phone
    };
    setContacts([...contacts, newContact]);
    setActiveScreen('list');
  };

  // UPDATE: Preparar edição de contato
  const startEdit = (contact) => {
    setContactToEdit(contact);
    setActiveScreen('form');
  };

  // UPDATE: Salvar contato editado
  const handleSaveContact = (id, name, phone) => {
    setContacts(contacts.map(contact => 
      contact.id === id 
        ? { ...contact, name: name, phone: phone }
        : contact
    ));
    setContactToEdit(null);
    setActiveScreen('list');
  };

  // DELETE: Remover contato
  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // Mostrar formulário de criação
  const showCreateForm = () => {
    setContactToEdit(null);
    setActiveScreen('form');
  };

  // Se não estiver logado, mostra tela de login
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // Simulação de Navegação com Renderização Condicional
  return (
    <div className="app-container">
      <Menu 
        onNavigate={handleNavigate} 
        onCreate={showCreateForm}
        onLogout={handleLogout}
      />
      
      <main className="content">
        {activeScreen === 'welcome' && <Welcome />}
        
        {activeScreen === 'list' && (
          <ContactList 
            contacts={contacts} 
            onEdit={startEdit} 
            onDelete={handleDeleteContact} 
          />
        )}
        
        {activeScreen === 'form' && (
          <ContactForm 
            contactToEdit={contactToEdit} 
            onSave={handleSaveContact}
            onSubmit={handleSubmit}
          />
        )}
      </main>
    </div>
  );
}

export default App;