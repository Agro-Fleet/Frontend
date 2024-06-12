"use client";
import React from "react";
import "../styles/components/sidebar.scss";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import Image from "next/image";
import menu from "../../../public/icon-menu.svg";
import logout from "../../../public/icon-logout.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Sbar = ({ navLinks }: { navLinks: Array<{ name: string, href: string, icon: string }> }) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="sidebar">
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#398414",
            width: '100%',
            height: "100vh",
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
            {
              navLinks.map((link: { name: string, href: string, icon: string }) => {
                return (
                  <li key={link.name}>
                    <MenuItem style={{backgroundColor:"transparent"}}>
                      <Image src={link.icon} alt="icon"/> 
                        {!collapsed && 
                          <Link href={link.href} style={{ textDecoration: 'none' }}>
                            <p>{link.name}</p>
                          </Link>
                        }
                    </MenuItem>
                  </li>
                );
              })
            }
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