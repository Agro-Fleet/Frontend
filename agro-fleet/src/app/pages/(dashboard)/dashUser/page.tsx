"use client";
import React from "react";
import "@/app/styles/pages/dashUser.scss";
import Filter from "@/app/components/filter";
import "primeicons/primeicons.css";


const DashUser = () => {
  const numCards = 10; // substitua por quantos cards você deseja renderizar

  return (
    <div className="dashboard">
      <section className="dash">
        <Filter label="Novo"/>
        <div className="user-cards">
          {Array.from({ length: numCards }).map((_, index) => (
            <div key={index} className="user-card">
              <div className="card-content">
                <div className="user-information">
                  <h3 className="card-itens">Vinícius Silva Souza</h3>
                  <p className="card-itens">
                    vinicius@gmail.com
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

export default DashUser;
