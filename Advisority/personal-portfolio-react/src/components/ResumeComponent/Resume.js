import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export const Resume = () => {
  return (
    <div className="container resume-container">
      <div className="row">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Experience</h2>
            <div className="mb-4">
              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2021</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Junior Advisor</span>
                      <small>Advisority</small>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Aliquet nec ullamcorper sit amet risus nullam eget
                      felis. Elementum eu facilisis sed odio morbi quis commodo
                      odio aenean.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2019</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Junior QA Game Tester</span>
                      <small>Amber Studio</small>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Mollis nunc sed id semper risus in hendrerit
                      gravida rutrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Education</h2>
            <div className="mb-4">
              <div className="timeline">
              <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>Present</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Master</span>
                      <small>ASE:E-Business</small>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Aliquet nec ullamcorper sit amet risus nullam eget
                      felis. Elementum eu facilisis sed odio morbi quis commodo
                      odio aenean.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2021</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Bachelor Degree</span>
                      <small>ASE:CSIE</small>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Aliquet nec ullamcorper sit amet risus nullam eget
                      felis. Elementum eu facilisis sed odio morbi quis commodo
                      odio aenean.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2018</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Baccalaureate diploma</span>
                      <small>Virgil Madgearu Economic Highschool</small>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Mollis nunc sed id semper risus in hendrerit
                      gravida rutrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
