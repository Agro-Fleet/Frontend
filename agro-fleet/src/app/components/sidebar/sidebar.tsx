"use client";
import React from "react";
import "./sidebar.scss";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import Image from "next/image";
import house from "../../../../public/icon-house.svg";
import menu from "../../../../public/icon-menu.svg";
import car from "../../../../public/icon-car.svg";
import user from "../../../../public/icon-user.svg";
import logout from "../../../../public/icon-logout.svg";

const Sbar = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  return (
    <div className="sidebar">
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#398414",
          },
        }}
        collapsed={collapsed}
      >
        <Menu
          className="menuContent"
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  display: "flex",  
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "300",
                  alignItems: "center",
                };
            },
          }}
        >
          <div className="menu-sidebar">
            <div
                className="menuItem"
                style={{backgroundColor:"transparent", alignContent: "center",}}
                onClick={() => setCollapsed(!collapsed)}
            >
              {!collapsed && <p>Agro Fleet</p>}
              <Image src={menu} alt="menu-icon" />
            </div>
          </div>
          <div className="span-sidebar">
            <MenuItem style={{backgroundColor:"transparent"}}>
              <Image src={house} alt="icon" /> {!collapsed && <p>Home</p>}
            </MenuItem>
            <MenuItem style={{backgroundColor:"transparent"}}>
              <Image src={user} alt="icon" /> {!collapsed && <p>Usuário</p>}
            </MenuItem>
            <MenuItem style={{backgroundColor:"transparent"}}>
              <Image src={car} alt="icon" /> {!collapsed && <p>Veículo</p>}
            </MenuItem>
          </div>
          <div className="logout-sidebar">
            <MenuItem
              style={{
                backgroundColor: "transparent",
              }}
            >    
              <Image src={logout} alt="sign-out-icon" /> {!collapsed && <p>Sair</p>}
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Sbar;