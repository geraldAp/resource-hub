import React from "react";
import { Outlet } from "react-router-dom";
import SidebarContent from "../components/phsicsResource/SidebarContent";
const Explore = () => {
  return (
    <body>
      <main className="mt-32 px-10">
        <section className="w-full gap-6 grid grid-cols-4">
          <aside id="side-bar" className="">
            <SidebarContent />
          </aside>
          <section className="col-span-3">
            <Outlet />
          </section>
        </section>
      </main>
    </body>
  );
};

export default Explore;
