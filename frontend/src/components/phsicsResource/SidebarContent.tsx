import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPhysicsResources } from "../../api/SanityApi";
import ContentCategory from "./ContentCategory";

const SidebarContent = () => {
  const {
    data: Resource,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["quotes"],
    queryFn: getPhysicsResources,
    // staleTime: 10000,
  });

  return (
    <div className="h-[70vh] flex flex-col border rounded-md pt-4 px-2">
      <h2 className="capitalize mb-3 text-xl font-semibold">
        Explore the resources
      </h2>
      <div className="flex-1 resource-years overflow-y-scroll">
        <ContentCategory Resources={Resource} />
      </div>
    </div>
  );
};

export default SidebarContent;
