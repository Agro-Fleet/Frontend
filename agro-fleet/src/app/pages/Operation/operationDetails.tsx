import React from 'react';
import Image from "next/image";
import './operationDetails.scss';
import Uniport3030 from '../../../../public/uniport3030.png';
import Sbar from '../../components/sidebar/sidebar'


const OperationDetails: React.FC = () => {
    const avisos = {
        baixo: "Alerta Baixo",
        medio: "Alerta Médio",
        alto: "Alerta Alto",
        critico: "Alerta Crítico"
    };

    return (
        <div className="operation-details">
            <aside className="sidebar">
                <Sbar/>
            </aside>
            <main className="content">
                <header className="header">
                    Detalhes Operação
                </header>
                <div className="details">
                    <div style={{display: 'flex', flexDirection: 'row'}}className="firstLayer">
                        <div className="card maquina">
                            <Image src={Uniport3030} alt="Maquina" />
                        </div>
                        <div className="card localizacao">Localização</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}} className="secondLayer">
                        <div className="card alertas">
                            {Object.entries(avisos).map(([key, value]) => (
                                <div key={key} className="alert">
                                    {value}
                                </div>
                            ))}
                        </div>
                        <div className="card avisos">
                            <div className="alert">Alerta Baixo</div>
                            <div className="alert">Alerta Médio</div>
                            <div className="alert">Alerta Alto</div>
                            <div className="alert">Alerta Crítico</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OperationDetails;
