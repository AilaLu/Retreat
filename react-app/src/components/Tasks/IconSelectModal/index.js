//* for creating a task, you select an icon first, and in the same modal, input the title

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { icons } from "../../../assets/icon";
import { addTaskThunk } from "../../../store/taskReducer";
import "./IconSelectModal.css";

export const IconSelectModal = ({ categoryId, setTasks }) => {
  const dispatch = useDispatch();
  const [modalSwitch, setModalSwitch] = useState("select icon");
  const [taskIcon, setTaskIcon] = useState("");
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  useEffect(() => {
    const errors = {};
    if (title.length < 1) errors.title = "please enter task title";
    if (title.length > 15) errors.title = "task title should be under 15 characters";   
    setErrors(errors);
  }, [title]);

  const hasErrors = Object.keys(errors).length > 0;

  const handleIconSubmit = async (e) => {
    e.preventDefault();
    if(hasErrors) return 
    //! send task icon and categoryId, render task title form to collect task title
    setModalSwitch("task title"); //render the task title form
    setTaskIcon(e.target.src);
  };

  const handleTitleSubmit = async (e) => {
    e.preventDefault();
    const tasks = await dispatch(addTaskThunk(title, taskIcon, categoryId));
    closeModal();
    setTasks(tasks); //! you can send setState as a prop, and still update the state in another component(category card)!!!
  };

  //! if the modalState is "icon modal" render the icon selections, if the modalState is "task title" render the task input form for task title
  return (
    <>
      {modalSwitch === "select icon" ? (
        <div>
          <h1>Select an icon for your new task</h1>
          <form onSubmit={handleIconSubmit}>
            <div className="icons">
              {icons.map((icon, index) => (
                <div className="icon" key={index}>
                  <button
                    className=""
                    type="submit"
                    onClick={handleIconSubmit}
                    data-icon={icon}
                  >
                    <img width="48" height="48" src={icon} alt="icon" />
                  </button>
                </div>
              ))}
            </div>
            <button className="big-grey-btn" onClick={closeModal}>
              Cancel
            </button>
          </form>
        </div>
      ) : null}
      {modalSwitch === "task title" ? (
        <div>
          <h1>Enter task title</h1>
          <form onSubmit={handleTitleSubmit}>
            <label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <div className="errors">{errors.title && <p>{errors.title}</p>}</div>
            <div className="modal-btns">
              <button className="big-grey-btn" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="big-green-btn"
                type="submit"
                onClick={handleTitleSubmit}
              >
                Done
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};
