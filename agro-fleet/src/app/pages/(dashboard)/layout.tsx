import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Sbar from "../../components/sidebar"
import { navLinks } from "@/app/components/navLinks";


const DashLayout =({children,}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <html lang="en">
        <body>
            <div className="root" style={
              {
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
              }
              }>
                <Sbar navLinks={navLinks}/>
                {children}
            </div>
        </body>
    </html>
  );
}

export default DashLayout;