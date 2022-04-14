import React from "react";
import "./projects.css";
import ProjectsData from "./projectsData";

function Projects(props) {
  const all_projects = ProjectsData;
  const user_project = all_projects.map((project) => (
    <div className="col-lg-4 mt-4" key={project.id}>
      <div className="card">
        <img
          className="card-img-top"
          src={require(`${project.project_img}`)}
          alt="Card Image"
        />
        <div className="card-body">
          <h4 className="card-title">{project.project_title}</h4>
          <p className="card-text">{project.project_desc}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <section id="projects" style={{ backgroundColor: "#0e1425" }}>
      <div className="container-fluid p-5">
        <h1 className="text-center text-white text-underline">
          <u>{props.title}</u>
        </h1>
        <div className="row">{user_project}</div>
      </div>
    </section>
  );
}

export default Projects;
