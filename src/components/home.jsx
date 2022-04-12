import React, { Component } from "react";
import "./home.css";
import image from "../images/user.jpg";

class Home extends Component {
  render() {
    return (
      <section className="bgimage" id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text text-center text-white">
              <img
                className="rounded-circle z-depth-2 hero-img"
                alt="User Image"
                src={image}
              />
              <h2 className="hero_title display-3">Hi, it's me Yatin!</h2>
              <p className="hero_desc h3 mx-5">
                I am a junior software developer working with Mindbowser Inc.
                based in Pune, India. I'm also pursuing my MCA from SIOM, Pune
                and I work with some of the popular front end technologies to
                create beautiful websites that get noticed. I seek experience to
                gain more knowledge in the web development field.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
