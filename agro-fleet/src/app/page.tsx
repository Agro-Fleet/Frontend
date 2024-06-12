import React from 'react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "./styles/pages/home.scss";
import "./globals.css"
import home from "../../public/home.svg";
import Image from "next/image";
import { Button } from 'primereact/button';
import Link from "next/link";

const Page : React.FC = () => {
  return (
    <div className="public-home">
      <header>
        <div className="logo">
          <h1>Agro Fleet</h1>
        </div>
        <div className="link">
          <h3>Duvidas</h3>
          <Link href="/pages/userLogin">Login</Link>
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

export default Page;