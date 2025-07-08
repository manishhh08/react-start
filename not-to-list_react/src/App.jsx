import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TotalHourComponent from "./components/TotalHourComponent";
import ListComponent from "./components/ListComponents";
import axios from "axios";
import useSound from "use-sound";
import mySoundFileAdd from "./assets/chime.mp3";
import mySoundFileDelete from "./assets/delete.wav";
import mySoundFileSwap from "./assets/swoosh.wav";

function App() {
  const [totalHour, setTotalHour] = useState(0);
  const [goodHour, setGoodHour] = useState(0);
  const [badHour, setBadHour] = useState(0);

  let [tasks, setTasks] = useState([]);

  const [addSound] = useSound(mySoundFileAdd);
  const [deleteSound] = useSound(mySoundFileDelete);
  const [swapSound] = useSound(mySoundFileSwap);

  const handleOnDelete = async (id) => {
    let response = await axios.delete(
      "http://localhost:3000/api/v1/tasks/" + id
    );

    if (response.data.status) {
      deleteSound();
      let updatedTasks = tasks.filter((item) => item._id != id);
      setTasks(updatedTasks);
      calculateTotal(updatedTasks);
    }
  };

  const handleOnSwap = async (id) => {
    let updatedTasks = [...tasks];
    let taskObj = updatedTasks.find((item) => item._id == id);

    taskObj.type = taskObj.type == "good" ? "bad" : "good";

    // call patch api
    let response = await axios.patch(
      "http://localhost:3000/api/v1/tasks/" + id,
      {
        type: taskObj.type,
      }
    );

    // update status of task only if true response
    if (response.data.status) {
      swapSound();
      setTasks(updatedTasks);
      calculateTotal(updatedTasks);
    }

    // let object = { key1: "test", key2: "test2" };
    // let obj2 = { ...object };
  };

  const handleOnAdd = async (taskObj) => {
    // get old task List
    let newTaskList = [...tasks];

    // create api call and use post to add task
    let response = await axios.post(
      "http://localhost:3000/api/v1/tasks",
      taskObj
    );

    if (response.data.status) {
      addSound();

      //update the tasks
      taskObj._id = response.data.task._id;
      // update old task list and generate new task list
      newTaskList.push(taskObj);
      setTasks(newTaskList);
      calculateTotal(newTaskList);
    }
    // update the tasks
    setTasks(newTaskList);
    calculateTotal(newTaskList);
    // add onadd here
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

  const fetchTasks = async () => {
    let response = await axios.get("http://localhost:3000/api/v1/tasks");
    console.log(100, response.data);
    setTasks(response.data.tasks);
    calculateTotal(response.data.tasks);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

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

      {/* <div className="toast-container position-fixed bottom-0 end-0 p-3">
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
      </div> */}

      {/* add react toast container here */}
    </>
  );
}

export default App;
