'use client'
import React, { useState, useEffect } from "react";
import "../../styles/pages/login.scss";
import login from "../../../../public/login.svg";
import Image from "next/image";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import Link from 'next/link';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);
  
  const [credentials, setCredentials] = useState({ username: 'erick.cirico@gmail.com', password: 'escirico22' }); // Variável para armazenar as credenciais
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1440);
    };

    window.addEventListener('resize', handleResize);

    // Check the initial screen size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogin = () => {
    // Verificar se as credenciais fornecidas coincidem
    if (username === credentials.username && password === credentials.password) {
      // Redirecionar para o dashboard
      window.location.href = '/pages/dashboard'; // Redireciona para a rota do dashboard
    } else {
      // Tratar autenticação inválida
      alert('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  return (
    <div className="screen">
      <div className="img">
        <h1>Agro Fleet</h1>
        <Image src={login} alt="home" />
      </div>
      <div className="form">
        {isMobileView && <h1 className="agro-fleet-title">Agro Fleet</h1>}
        <div className="login">
          <h1>Login</h1>
          <span className="p-float-label">
            <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="username">Email</label>
          </span>
          <span className="p-float-label">
            <Password id="password" value={password} feedback={false} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password">Senha</label>
          </span>
          <Button className="entrar" onClick={handleLogin}>Entrar</Button>
          <Button className="sair">Sair</Button>
          <a href="#">Redefinir senha</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
