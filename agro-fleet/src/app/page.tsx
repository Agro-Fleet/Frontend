import React from 'react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Home from './pages/home/home';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Login from './pages/login/login';


const Page: React.FC = () => {
  return (
    <div>
      {/* <Home /> */}
      <Login />
    </div>
  );
};

export default Page;