import React from "react";
import Navbar from "./Navbar";

interface PropType {
  children: React.ReactNode;
}

const Layout: React.FC<PropType> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
