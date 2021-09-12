import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Logo from "../../assets/cover-image.svg";

export const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12 d-flex align-items-center">
          <div className="about-text">
            <small className="about-text">
              Welcome to my portfolio website!
            </small>
            <h1 className="h1-text">
              Hello people, <span>I'm Andy</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dignissim enim sit amet venenatis.
            </p>
          </div>
          <div className="col-lg-5 col-md-12 col-12">
            <img src={Logo} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
