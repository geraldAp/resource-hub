import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const FadeSlider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fade
      indicators={true}
      duration={5000}
      easing="ease"
      transitionDuration={2000}
      infinite
      arrows={true}
      autoplay
    >
      {children}
    </Fade>
  );
};

export default FadeSlider;