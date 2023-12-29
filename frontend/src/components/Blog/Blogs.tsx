import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../api/SanityApi";

const Blogs = () => {
  const { data, isPending } = useQuery({
    queryKey: ["Blogs"],
    queryFn: getBlogs,
  });
  console.log(data);

  return (
    <div>
      <h2 className="text-base font-bold mb-2">Popular Physics Blogs</h2>
    </div>
  );
};

export default Blogs;
