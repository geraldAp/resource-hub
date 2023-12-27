import React from "react";

const carData = [
  {
    id: 0,
    imgSrc: "/icons/bolt.svg",
    heading: "Productivity Boost",
    description:
      "Elevate your efficiency with resources tailored for maximum productivity.",
  },
  {
    id: 1,
    imgSrc: "/icons/chart.svg",
    heading: "Motivation",
    description:
      "Stay inspired and driven on your academic journey with uplifting content and motivational resources.",
  },
  {
    id: 2,
    imgSrc: "/icons/desktop.svg",
    heading: "Technology Insights",
    description:
      "Dive into the latest tech trends and insights to complement your studies and stay ahead in the ever-evolving world of physics",
  },
];

type cardType = (typeof carData)[0];

const GainCards = () => {
  return (
    <>
      {carData.map((item: cardType) => (
        <div
          key={item.id}
          className="bg-[#D9D9D933] rounded-md p-4 flex  flex-col items-center"
        >
          <div className="rounded-full bg-white hover:bg-customGreen mb-6 p-3">
            <img src={item.imgSrc} alt="" className="w-9 h-9  " />
          </div>
          <h3 className="mb-3 text-2xl font-bold">{item.heading}</h3>
          <p className="text-center text-sm">{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default GainCards;
