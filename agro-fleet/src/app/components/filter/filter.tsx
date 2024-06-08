'use-client';
import React from 'react';
import "./filter.scss";
import { InputText } from 'primereact/inputtext'; 
import { Button } from 'primereact/button';
import "primeicons/primeicons.css";

interface FilterProps {
    label: string;
  }

const Filter: React.FC<FilterProps> = ({ label }) => {
    return (
    <div className="filter">
        <span className="p-input-icon-left">
            <i className="pi pi-search" 
                style={{
                    top:"20px",
                    left:"20px"
                }}
            />
            <InputText placeholder="    Pesquisar"/>
        </span>
        <Button icon="pi pi-plus-circle" label={label} />
    </div>
  );
};

export default Filter;