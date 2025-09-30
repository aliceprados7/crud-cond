import React, {useState} from "react";
import './Login.css';

function Login({ onLogin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubimit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    }

    return(
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubimit}>
                <h2>Agenda de contatos</h2>
                <p>Faça login para continuar</p>
                <input type="text"
                placeholder="Usuário (adimin)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                <input type="password"
                placeholder="Senha (123)"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}
export default Login;