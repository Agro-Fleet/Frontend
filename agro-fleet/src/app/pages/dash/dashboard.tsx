"use client";
import React from "react";
import "./dashboard.scss";
import Sbar from "../../components/sidebar/sidebar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { InputText } from 'primereact/inputtext';

const Dashboard = () => {
  const numCards = 70; // substitua por quantos cards você deseja renderizar

  return (
    <div className="dashboard">
      <Sbar/>
      <section className="dash">
        <div className="filter">
          <InputText
            placeholder="Pesquisar"
          />
          <Button
            icon="pi pi-plus-circle"
            label="Criar operação"
          />
        </div>
        <div className="cards">
          {Array.from({ length: numCards }).map((_, index) => (
            <Card key={index} className="card">
              <h3>Operação soja</h3>
              <p>11/12/2024</p>
              <p>11:05</p>
              <p>Uniport</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
