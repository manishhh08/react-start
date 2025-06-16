import React from "react";

const ListComponents = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h2>Good List</h2>
          <hr />
          <table className="table">
            <tbody id="goodList"></tbody>
          </table>
          <div className="alert alert-success" role="alert">
            You invested <span id="goodHour"></span> hour
          </div>
        </div>

        <div className="col-sm-12 col-md-6">
          <h2>Bad List</h2>
          <hr />
          <table className="table">
            <tbody id="badList"></tbody>
          </table>

          <div className="alert alert-danger" role="alert">
            You wasted <span id="badHour"></span> hour
          </div>
        </div>
      </div>
    </>
  );
};

export default ListComponents;
