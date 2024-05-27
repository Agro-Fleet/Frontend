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
import house from "../../../../public/house.svg";
import menu from "../../../../public/menu.svg";
import car from "../../../../public/car.svg";
import user from "../../../../public/user.svg";

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
          <MenuItem
            style={{ marginBottom: "60px", marginTop: "48px" }}
            onClick={() => setCollapsed(!collapsed)}
          >
            {!collapsed && <span>Agro Fleet</span>}
            <Image src={menu} alt="menu" />
          </MenuItem>
          <MenuItem style={{ marginTop: "24px" }}>
            {" "}
            <Image src={house} alt="house" /> {!collapsed && <span>Home</span>}
          </MenuItem>
          <MenuItem style={{ marginTop: "24px" }}>
            {" "}
            <Image src={user} alt="user" /> {!collapsed && <span>Usuário</span>}
          </MenuItem>
          <MenuItem style={{ marginTop: "24px" }}>
            {" "}
            <Image src={car} alt="car" /> {!collapsed && <span>Veículo</span>}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Sbar;
