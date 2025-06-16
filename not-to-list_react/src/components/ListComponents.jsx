import React from "react";
import TaskList from "./TaskList";

const ListComponent = ({ tasks, handleOnDelete, handleOnSwap }) => {
  //   good list
  let goodTasks = tasks.filter((item) => item.type == "good");

  //   bad list
  let badTasks = tasks.filter((item) => item.type == "bad");

  return (
    <div className="row">
      {/* Good List */}
      <TaskList
        title="GOOD"
        tasks={goodTasks}
        handleOnDelete={handleOnDelete}
        handleOnSwap={handleOnSwap}
      />

      {/* Bad List */}
      <TaskList
        title="BAD LIST"
        tasks={badTasks}
        handleOnDelete={handleOnDelete}
        handleOnSwap={handleOnSwap}
      />
    </div>
  );
};

export default ListComponent;
