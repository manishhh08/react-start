import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TotalHourComponent from "./components/TotalHourComponent";
import ListComponent from "./components/ListComponents";

function App() {
  const [totalHour, setTotalHour] = useState(0);
  const [goodHour, setGoodHour] = useState(0);
  const [badHour, setBadHour] = useState(0);

  let [tasks, setTasks] = useState([
    {
      id: "1",
      task: "TASK",
      hour: 10,
      type: "good",
    },
    {
      id: "2",
      task: "TASK 2",
      hour: 20,
      type: "bad",
    },
    {
      id: "3",
      task: "TASK 3",
      hour: 30,
      type: "good",
    },
    {
      id: "4",
      task: "TASK 4",
      hour: 40,
      type: "bad",
    },
    {
      id: "5",
      task: "TASK 5",
      hour: 50,
      type: "bad",
    },
  ]);

  const handleOnDelete = (id) => {
    let updatedTasks = tasks.filter((item) => item.id != id);
    setTasks(updatedTasks);

    calculateTotal(updatedTasks);
  };

  const handleOnSwap = (id) => {
    let updatedTasks = [...tasks];
    let taskObj = updatedTasks.find((item) => item.id == id);

    taskObj.type = taskObj.type == "good" ? "bad" : "good";

    setTasks(updatedTasks);

    calculateTotal(updatedTasks);

    // let object = { key1: "test", key2: "test2" };

    // let obj2 = { ...object };
  };

  const handleOnAdd = (taskObj) => {
    // get old task List
    let newTaskList = [...tasks];

    // update old task list and generate new task list
    newTaskList.push(taskObj);

    // update the tasks
    setTasks(newTaskList);
    calculateTotal(newTaskList);
  };

  const calculateTotal = (tempTaskList) => {
    let thr = tempTaskList.reduce((acc, item) => parseInt(item.hour) + acc, 0);

    let bhr = tempTaskList.reduce((acc, item) => {
      return acc + (item.type == "bad" ? parseInt(item.hour) : 0);
    }, 0);

    let ghr = tempTaskList.reduce((acc, item) => {
      return acc + (item.type == "good" ? parseInt(item.hour) : 0);
    }, 0);

    setTotalHour(thr);
    setBadHour(bhr);
    setGoodHour(ghr);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container text-center">
          {/* Header */}
          <Header title="Not to do List" />

          {/* Add Task Form */}
          <AddTaskForm tasks={tasks} handleOnAdd={handleOnAdd} />

          {/* List */}
          <ListComponent
            tasks={tasks}
            handleOnDelete={handleOnDelete}
            handleOnSwap={handleOnSwap}
            goodHour={goodHour}
            badHour={badHour}
          />

          {/* Total Hours */}
          <TotalHourComponent totalHour={totalHour} />
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
            <img src="..." className="rounded me-2" alt="..." />
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
            <span id="toast-msg"></span>
          </div>
        </div>
      </div>
      <audio id="chime-audio">
        <source src="assets/chime.mp3" />
      </audio>
    </>
  );
}

export default App;
