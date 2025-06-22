import React from "react";

const MyProject = () => {
  return (
    <section className="project-section container" id="projects">
      <h2>My Projects</h2>
      <div className="grid project-grid">
        <div className="project-card">
          <iframe
            src="https://not-to-do-listreact.vercel.app/"
            // frameorder="0"
            style={{ height: "100%", width: "100%", border: "none" }}
          ></iframe>
        </div>
        <div className="project-card">
          <iframe
            src="https://manishhh08.github.io/Contact-list/"
            // frameborder="0"
            style={{ height: "100%", width: "100%", border: "none" }}
          ></iframe>
        </div>
        <div className="project-card">
          <iframe
            src="https://randomjoke-delta.vercel.app/"
            // frameborder="0"
            style={{ height: "100%", width: "100%", border: "none" }}
          ></iframe>
        </div>
        <div className="project-card">
          <iframe
            src="https://prank-calculator-one.vercel.app/"
            // frameborder="0"
            style={{ height: "100%", width: "100%", border: "none" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
