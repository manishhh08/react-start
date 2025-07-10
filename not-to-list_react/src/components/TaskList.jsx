import React, { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";

import { IoArrowBackCircleOutline } from "react-icons/io5";

const TaskList = ({
  title,
  type,
  tasks,
  handleOnDelete,
  handleOnSwap,
  hour,
  handleOnDeleteAll,
}) => {
  //   let tasks = props.tasks;
  //   let handleOnDelete = props.handleOnDelete;

  const [idsToDelete, setIdsToDelete] = useState([]);

  const handleOnChange = (checked, id) => {
    let tempIds = [...idsToDelete];

    console.log(checked, id);

    if (checked) {
      tempIds.push(id);
      setIdsToDelete(tempIds);
    } else {
      //console.log("UNCHECK");
      tempIds = tempIds.filter((ti) => ti != id);
      setIdsToDelete(tempIds);
    }
  };
  return (
    <div className="col-sm-12 col-md-6">
      <h2>{title}</h2>

      {idsToDelete.length > 0 ? (
        <button
          className="btn btn-danger"
          onClick={() => {
            setIdsToDelete([]);
            handleOnDeleteAll(idsToDelete);
          }}
        >
          Delete All
        </button>
      ) : (
        ""
      )}
      <table className="table">
        <tbody>
          {tasks.map((item, idx) => {
            return (
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={(event) =>
                      handleOnChange(event.target.checked, item._id)
                    }
                    checked={
                      idsToDelete.find((i) => i === item._id) ? true : false
                    }
                  />
                </td>
                <td>{item.task}</td>
                <td>{item.hour}Hr</td>
                <td>
                  {item.type == "good" ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-danger"
                        // onclick="deleteTask('Z5zFfV')"
                        onClick={() => handleOnDelete(item._id)}
                      >
                        <RiDeleteBin2Fill />
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleOnSwap(item._id)}
                      >
                        <FaArrowRightFromBracket />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => handleOnSwap(item._id)}
                      >
                        <IoArrowBackCircleOutline />
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-danger"
                        // onclick="deleteTask('Z5zFfV')"
                        onClick={() => handleOnDelete(item._id)}
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

      {type == "good" ? (
        <div className="alert alert-info" role="alert">
          Yous save {hour} hour
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          You wasted {hour} hour
        </div>
      )}
    </div>
  );
};

export default TaskList;
