import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <section id="projects" style={{ backgroundColor: "#76B5C5" }}>
        <div className="container-fluid p-5">
          <h1 className="text-center text-white text-underline">
            <u>Portfolio</u>
          </h1>
          <div className="row">
            <div className="col-lg-4 mt-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require("../images/project-images/youtube-img.jpg")}
                  alt="Card image"
                  style={{ width: "100%", height: "250px" }}
                />
                <div className="card-body">
                  <h4 className="card-title">YouTube Clone</h4>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4">
              <div className="card portfolioContent">
                <img
                  className="card-img-top"
                  src={require("../images/project-images/quiz-img.png")}
                  alt="Card image"
                  style={{ width: "100%", height: "250px" }}
                />
                <div className="card-body">
                  <h4 className="card-title">Quiz App</h4>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4">
              <div className="card portfolioContent">
                <img
                  className="card-img-top"
                  src={require("../images/project-images/landing-page-img.jpg")}
                  alt="Card image"
                  style={{ width: "100%", height: "250px" }}
                />
                <div className="card-body">
                  <h4 className="card-title">Product Landing Page</h4>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-lg-4 mt-4">
              <div className="card portfolioContent">
                <img
                  className="card-img-top"
                  src={require("../images/project-images/message-img.jpg")}
                  alt="Card image"
                  style={{ width: "100%", height: "250px" }}
                />
                <div className="card-body">
                  <h4 className="card-title">Messaging Service</h4>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4">
              <div className="card portfolioContent">
                <img
                  className="card-img-top"
                  src={require("../images/project-images/twitter-img.jpg")}
                  alt="Card image"
                  style={{ width: "100%", height: "250px" }}
                />
                <div className="card-body">
                  <h4 className="card-title">Twitter Clone</h4>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4">
              <div className="card portfolioContent">
                <img
                  className="card-img-top"
                  src={require("../images/project-images/blog-img.jpg")}
                  alt="Card image"
                  style={{ width: "100%", height: "250px" }}
                />
                <div className="card-body">
                  <h4 className="card-title">Blog App</h4>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
