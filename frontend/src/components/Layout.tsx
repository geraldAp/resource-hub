import React from "react";
import Navbar from "./Navbar";

interface PropType {
  children: React.ReactNode;
}

const Layout: React.FC<PropType> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
