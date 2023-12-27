import React from "react";
import { useParams } from "react-router-dom";

const Resources = () => {
  const { level, id } = useParams();

  return (
    <div className="">
      Resources : {level} : {id}
    </div>
  );
};

export default Resources;
