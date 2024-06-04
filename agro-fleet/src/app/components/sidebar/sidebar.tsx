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
            <MenuItem
                style={{ marginBottom: "60px", marginTop: "48px" }}
                onClick={() => setCollapsed(!collapsed)}
            >
              {!collapsed && <span>Agro Fleet</span>}
              <Image src={menu} alt="menu-icon" />
            </MenuItem>
          </div>
          <div className="span-sidebar">
            <MenuItem>
              <Image src={house} alt="icon" /> {!collapsed && <span>Home</span>}
            </MenuItem>
            <MenuItem>
              <Image src={user} alt="icon" /> {!collapsed && <span>Usuário</span>}
            </MenuItem>
            <MenuItem>
              <Image src={car} alt="icon" /> {!collapsed && <span>Veículo</span>}
            </MenuItem>
          </div>
          <div className="logout-sidebar">
            <MenuItem
              style={{ marginBottom: "60px", marginTop: "48px" }}
            >    
              <Image src={logout} alt="sign-out-icon" /> {!collapsed && <span>Logout</span>}
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Sbar;