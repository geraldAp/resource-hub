import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-6  h-[100vh]">
      <div className="flex-1">
        <h1 className="text-4xl mb-2 font-semibold">
          Unlock Knowledge: Explore
          <span className="block"> Educational Blogs Into The</span>
          World Of Physics And Tech
        </h1>
        <p className="text-sm w-[72%]">
          Embark on a journey of knowledge with our educational blogs, delving
          into the realms of physics and technology. Unlock insights, explore
          discoveries, and stay informed about the latest advancements in the
          dynamic world of science and tech.
        </p>
      </div>
      <div className="flex-1 w-full h-[65vh] ">
        <img
          src="/img/blogHeroImage1.png"
          className="h-[100%] w-[100%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
