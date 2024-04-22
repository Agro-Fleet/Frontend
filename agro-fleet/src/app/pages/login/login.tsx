import React from "react";
import "./login.scss";
import login from "../../../../public/login.svg";
import Image from "next/image";
import { InputText } from "primereact/inputtext";

function Login() {
  return (
    <div className="screen">
      <div className="img">
        <h1>Agro Fleet</h1>
        <Image src={login} alt="home" />
      </div>
      <div className="form">
        <div className="login">
          <h1>Login</h1>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
