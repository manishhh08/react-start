import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";

import { IoArrowBackCircleOutline } from "react-icons/io5";

const TaskList = ({ title, tasks, handleOnDelete, handleOnSwap }) => {
  //   let tasks = props.tasks;
  //   let handleOnDelete = props.handleOnDelete;
  return (
    <div className="col-sm-12 col-md-6">
      <h2>{title}</h2>
      <hr />
      <table className="table">
        <tbody>
          {tasks.map((item, idx) => {
            return (
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>{item.task}</td>
                <td>{item.hour}Hr</td>
                <td>
                  {item.type == "good" ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-danger"
                        // onclick="deleteTask('Z5zFfV')"
                        onClick={() => handleOnDelete(item.id)}
                      >
                        <RiDeleteBin2Fill />
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleOnSwap(item.id)}
                      >
                        <FaArrowRightFromBracket />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => handleOnSwap(item.id)}
                      >
                        <IoArrowBackCircleOutline />
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-danger"
                        // onclick="deleteTask('Z5zFfV')"
                        onClick={() => handleOnDelete(item.id)}
                      >
                        <RiDeleteBin2Fill />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="alert alert-danger" role="alert">
        You wasted <span id="badHour"></span> hour
      </div>
    </div>
  );
};

export default TaskList;
