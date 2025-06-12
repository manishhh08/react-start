import React from "react";

const Details = () => {
  return (
    <section style={{ width: "80%" }}>
      <div className="details" style={{ width: "100%" }}>
        <div className="detail_bar">
          <div className="graduate">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>IT</span>
            <span>Graduate</span>
          </div>
          <div
            className="graduate"
            style={{
              borderLeft: "5px solid grey",
              borderRight: "5px solid grey",
            }}
          >
            <i className="fa-solid fa-list-check"></i>
            <span>3+ Project</span>
            <span>Completed</span>
          </div>
          <div className="graduate">
            <i className="fa-solid fa-business-time"></i>
            <span>1 Year</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
