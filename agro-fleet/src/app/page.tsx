import React from 'react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './pages/home/home';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import Login from './pages/login/login';
import OperationDetails from './pages/Operation/operationDetails';
import Dashboard from './pages/dash/dashboard';


const Page: React.FC = () => {
  return (
    <div>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <OperationDetails />
    </div>
  );
};

export default Page;