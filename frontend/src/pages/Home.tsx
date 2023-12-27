// import React from "react";
import GainCards from "../components/home/GainCards";
import MotivationalQuotes from "../components/home/MotivationalQuotes";

const potentialPoints = [
  {
    id: 0,
    text: "Immerse yourself in a comprehensive array of resources, spanning various academic levels and subjects, ensuring a well-rounded learning journey tailored to your needs.",
  },
  {
    id: 1,
    text: "Fuel your academic success with a rich collection of educational materials carefully curated to enhance your skills, boost understanding, and promote academic excellence.",
  },
  {
    id: 2,
    text: "Open the door to limitless possibilities as you explore a variety of resources, empowering you to reach your full potential on your educational path.",
  },
];
const elevationPoints = [
  {
    id: 0,
    text: "Immerse yourself in a diverse array of resources carefully curated for physics students across all levels. From foundational concepts to advanced theories, our collection ensures a well-rounded understanding of the subject.",
  },
  {
    id: 1,
    text: "Experience an interactive learning hub designed to spark curiosity and inspire a passion for physics. Engage with stimulating content that goes beyond textbooks, encouraging a deeper connection with the subject.",
  },
  {
    id: 2,
    text: "Navigate the intersection of physics and technology with our curated insights. Access the latest technological trends and applications, ensuring you graduate not only as a physics expert but also a tech-savvy professional ready for the modern world.",
  },
];
type PointsType = (typeof potentialPoints)[0];

const Home = () => {
  return (
    <main className="mt-24 px-12">
      {/* hero */}
      <section id="Hero " className="pt-14 pb-14">
        {/* description  */}
        <div className=" w-full flex flex-col  items-center ">
          <h1 className="text-center font-bold mb-2 text-4xl">
            Unlocking Cutting-Edge Insights and
            <span className="block">Materials for Your Academic Journey</span>
          </h1>
          <p className="text-center text-sm w-[65%] mb-2">
            A resource center catering to physics students of all levels in the
            university, our hub is a knowledge haven.
            <span className="block">
              From foundational 100-level courses to advanced 400-level studies,
              we curate a rich collection of resources.
            </span>
            Emphasizing not only core physics but also incorporating
            technology-related content, we aim to empower students with a
            holistic learning experience
          </p>
          <div className="">
            <button className="bg-customGreen rounded-[26px]  border-2 ease-in duration-500 hover:scale-110 border-customGreen hover:bg-transparent px-12 py-2 ">
              Get Started
            </button>
          </div>
        </div>
        {/* hero image */}
        <div className="mt-16 mx-auto w-[80%]">
          <img
            src="/img/frame.png"
            alt="hero=frame"
            className="w-full h-[60vh] "
          />
        </div>
      </section>
      {/* Rest of the body */}
      <section>
        {/* what you gain */}
        <section className="mb-16">
          <h2 className="font-bold mb-8 text-3xl text-center">
            What You Seek To Gain
          </h2>
          {/* gain cards  */}
          <div className="mt-16 mx-auto w-[80%] grid grid-cols-3 gap-7">
            <GainCards />
          </div>
        </section>
        {/* productivity and some other thing  */}
        <section className="mt-14 mb-14 mx-auto w-[80%]">
          <div
            className="grid 
           overflow-hidden grid-cols-2 place-items-center h-[70vh] gap-6"
          >
            <div className="h-full w-full">
              <img
                src="/img/potential-image.png"
                alt="Potential-image.png"
                className="h-[70vh] "
              />
            </div>
            <div>
              <h2 className="text-2xl mb-3 font-bold ">
                Unlock Your Potential with Our Diverse Academic and Educational
                Resources
              </h2>
              {potentialPoints.map((point: PointsType) => (
                <div
                  key={point.id}
                  className="mb-4 border-l-4 border-customGreen pl-4"
                >
                  <p className="text-xs">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* elevation Section */}
        <section className="my-14  mx-auto w-[80%]" id="Elevation-Section">
          <div
            className="
           flex items-center h-[60vh] gap-6"
          >
            <div className="flex-1">
              <h2 className="text-2xl mb-3 font-bold ">
                Unlock Your Potential with Our Diverse Academic and Educational
                Resources
              </h2>
              {elevationPoints.map((point: PointsType) => (
                <div
                  key={point.id}
                  className="mb-4 border-l-4 border-customGreen pl-4"
                >
                  <p className="text-xs">{point.text}</p>
                </div>
              ))}
            </div>
            <div className="h-full flex-1 w-full">
              <img
                src="/img/elevation.png"
                alt="Potential-image.png"
                className=" h-[60vh] "
              />
            </div>
          </div>
        </section>
        {/* explore section */}
        <section className="my-24  mx-auto w-[80%]">
          {/* selection area */}
          <div className="w-full mb-12">
            <h2 className="text-3xl  text-center mb-3 font-bold ">
              Unleash Your Potential:
              <span className="block">
                Explore Tech Skills with Our Resource Center
              </span>
            </h2>
            <p className="text-center mb-6">
              Our resource center is dedicated to granting access to a wide
              range of physics-related materials, such as textbooks, journals,
              and research papers.
              <span className="block">
                Our goal is to facilitate a comprehensive learning environment
                for university students at all levels.
              </span>
              Explore the richness of our curated collection to enhance your
              academic journey.
            </p>
            {/* selection buttons */}
            <div className="w-full flex justify-center ">
              <div className="flex gap-5 ">
                <button className="bg-customGreen rounded-[26px]  border-2 ease-in duration-500 hover:scale-110 border-customGreen hover:bg-transparent px-12 py-2">
                  Get Started
                </button>
                <button className="bg-customGray rounded-[26px]  border-2 ease-in duration-500 hover:scale-110 border-customGray hover:bg-transparent px-12 py-2">
                  Learn a Skill
                </button>
              </div>
            </div>
            {/* image areas */}
            <section className=" my-12 mx-auto w-[80%]">
              <div className="grid grid-cols-2 gap-8 ">
                <div className="h-[50vh] relative">
                  <img
                    src="/img/physics-image.jpeg"
                    className="h-[100%] rounded-3xl"
                    alt=""
                  />
                  <img
                    className="absolute bottom-10 left-44 w-44"
                    src="/img/frame-physics.png"
                    alt=""
                  />
                </div>
                <div className="h-[50vh] relative">
                  <img
                    src="/img/dev-image1.jpeg"
                    className="h-[100%] rounded-3xl"
                    alt=""
                  />
                  <img
                    className="absolute bottom-4 left-4 w-44"
                    src="/img/tech-course.png"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* Motivational Quotes */}
        <section className="my-24  mx-auto w-[60%]">
          <h1 className="text-3xl mb-6 text-center font-semibold ">
            What some Mentors say
          </h1>
          <MotivationalQuotes />
        </section>
      </section>
    </main>
  );
};

export default Home;
