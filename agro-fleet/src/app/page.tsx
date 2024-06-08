import React from 'react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import Home from './pages/home/home';
import Login from './pages/login/login';
import OperationDetails from './pages/Operation/operationDetails';
import Dashboard from './pages/dash/dashboard';
import DashUser from './pages/dash_user/dashUser';
import DashVehicle from './pages/dash_vehicle/dashVehicle';


const Page: React.FC = () => {
  return (
    <div>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Dashboard /> */}
      {/* <OperationDetails /> */}
      <DashUser />
      {/* <DashVehicle /> */}

    </div>
  );
};

export default Page;