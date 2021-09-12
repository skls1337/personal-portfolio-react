import React from "react";
import { Carousel } from "3d-react-carousal";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";

export const Projects = () => {
  const slides = [
    <img src={photo1} alt="photo1" />,
    <img src={photo2} alt="photo2" />,
    <img src={photo3} alt="photo3" />,
  ];
  return (
    <div className="container" id="projects-component">
      <div className="col-lg-11 text-center max-auto col-12 d-flex">
        <div className="col-lg-8 mx-auto text-align-center">
          <h2 className="h2-class">Things that I have developed</h2>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Carousel arrows={true}  slides={slides} autoplay={false} interval={5000} />
      </div>
    </div>
  );
};
