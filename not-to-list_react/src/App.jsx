import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import ListComponents from "./components/ListComponents";
import TotalHourComponent from "./components/TotalHourComponent";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container text-center">
          {/* header row */}
          <Header title="Not to do List" />
          {/* <!-- add task form row --> */}
          <AddTaskForm />
          {/* <!-- list row --> */}
          <ListComponents />
          {/* <!-- total hour row --> */}
          <TotalHourComponent />
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
