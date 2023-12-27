import React from "react";
import FadeSlider from "../package/FadeSlider";
import { useQuery } from "@tanstack/react-query";
import { getQuotes } from "../../api/hygraphApi";

const MotivationalQuotes = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["quotes"],
    queryFn: getQuotes,
  });

  console.log(data);
  return (
    <div className="overflow-hidden  h-[65vh] rounded-lg w-full">
      <FadeSlider>
        {data?.map((quote) => (
          <div key={quote.id} className="relative h-[65vh]">
            <img
              src={quote?.mentorImage?.url}
              className="w-[100%] h-[100%]"
              alt="quotes"
            />
            <div className="absolute w-[60%] z-10 bottom-14 text-right right-6 text-white">
              <p className="text-xs">{quote.qoute}</p>
              <span className="text-xs font-bold">{quote.mentorName}</span>
            </div>
            <div className="bg-black/50 absolute top-0 left-0 w-full h-full"/>
          </div>
        ))}
      </FadeSlider>
    </div>
  );
};

export default MotivationalQuotes;
