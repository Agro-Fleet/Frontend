"use client";
import React from "react";
import "@/app/styles/pages/dashVehicle.scss";
import Filter from "@/app/components/filter";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";



const DashVehicle = () => {
  const numCards = 10; // substitua por quantos cards você deseja renderizar

  return (
    <div className="dashboard">
      <section className="dash">
        <Filter label="Nova Máquina" />
        <div className="vehicle-cards">
          {Array.from({ length: numCards }).map((_, index) => (
            <div key={index} className="vehicle-card">
              <div className="card-content">
                <div className="vehicle-information">
                  <h3 className="card-itens">Uniport 5030 NPK</h3>
                  <p className="card-itens">
                    NLP 3032
                  </p>
                </div>
                <i className="pi pi-pen-to-square" style={
                    { 
                      color: "#33303E", 
                      alignContent: "center", 
                      display: "flex", 
                      flexWrap: "wrap", 
                      marginLeft: "4px",
                      cursor: "pointer", 
                    }} 
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashVehicle;
