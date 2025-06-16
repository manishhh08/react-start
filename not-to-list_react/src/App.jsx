import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container text-center">
          {/* header row */}
          <div className="row">
            <div className="col p-5">
              <h1>NOT TO DO LIST</h1>
            </div>
          </div>
          {/* <!-- add task form row --> */}
          <div className="row pt-5 pb-5 ps-4 pe-4 mt-5 mb-5 rounded-pill shadow-lg">
            {/* <!-- task element --> */}
            <div className="col-sm-12 col-md-6">
              <input
                type="text"
                className="form-control"
                id="task"
                name="task"
                placeholder="ADD TASK"
              />
            </div>
            {/* <!-- hour element --> */}
            <div className="col-sm-12 col-md-3 col-lg-2">
              <input
                type="number"
                className="form-control"
                id="hour"
                name="hour"
                placeholder="HOUR"
              />
            </div>
            {/* <!-- type element --> */}
            <div className="col-sm-12 col-md-3 col-lg-2">
              <select className="form-select" name="type" id="type">
                <option value="good">Good</option>
                <option value="bad">Bad</option>
              </select>
            </div>

            <div className="col-sm-12 col-md-2">
              <button
                type="button"
                className="btn btn-primary"
                id="addBtn"
                // onClick="addTask()"
              >
                ADD TASK
              </button>
            </div>
          </div>

          {/* <!-- list row --> */}
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
          {/* <!-- alert row --> */}
          <div className="row">
            <div className="col">
              <div className="alert alert-info" role="alert">
                Total Hours : <span id="totalHour"></span> hour
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img src="ge" className="rounded me-2" alt="" />
            <strong className="me-auto">TASK</strong>
            <small>0 sec ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            <span id="toast-msg"> </span>
          </div>
        </div>
      </div>

      <audio id="chime-audio">
        <source src="assets/chime.mp3" />
      </audio>
      <audio id="swoosh-audio">
        <source src="assets/swoosh.wav" />
      </audio>
      <audio id="delete-audio">
        <source src="assets/delete.wav" />
      </audio>
    </>
  );
}

export default App;
