"use client";
import React from "react";
import "./sidebar.scss";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Image from "next/image";
import house from "../../../../public/house.svg";
import menu from "../../../../public/menu.svg";
import car from "../../../../public/car.svg";
import user from "../../../../public/user.svg";

const Sbar = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div className="sidebar">
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem>
            <button
              className="sb-button"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Image src={menu} alt="menu" />
            </button>
          </MenuItem>
          <MenuItem>
            {" "}
            <Image src={house} alt="house" />{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <Image src={user} alt="user" />{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <Image src={car} alt="car" />{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Sbar;
