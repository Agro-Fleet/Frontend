import React from "react";
import "./home.scss";
import home from "../../../../public/home.svg";
import Image from "next/image";
import { Button } from 'primereact/button';

function Home() {
  return (
    <div className="public-home">
      <header>
        <div className="logo">
          <h1>Agro Fleet</h1>
        </div>
        <div className="link">
          <h3>Duvidas</h3>
          <h3 className="link-login">Login</h3>
        </div>
      </header>
      <section className="banner">
        <div className="banner-text">
          <h1>Agro Fleet</h1>
          <h3>
            Agro Fleet é uma plataforma de gestão para Maquinas Agrícolas para
            pequenos e médios agricultores.
          </h3>
          <Button label="Dúvidas" />
        </div>
        <div className="banner-img">
          <Image src={home} alt="home" />
        </div>
      </section>
    </div>
  );
}

export default Home;
