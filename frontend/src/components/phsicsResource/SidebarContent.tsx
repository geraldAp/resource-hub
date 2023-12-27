import React from "react";

const SidebarContent = () => {
  return (
    <div className="h-[70vh] flex flex-col border rounded-md p-4">
      <h2 className="capitalize text-xl font-semibold">
        Explore the resources
      </h2>
      <div className="flex-1 resource-years overflow-y-scroll">

      </div>
       
    </div>
  );
};

export default SidebarContent;
