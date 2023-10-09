import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { editTaskThunk } from "../../../store/taskReducer";

export const EditTitleModal = ({ task, setTasks }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  useEffect(() => {
    const errors = {};
    if (title.length < 1) errors.title = "please enter task title";
    if (title.length > 50) errors.title = "task title should be under 50 characters";   
    setErrors(errors);
  }, [title]);

  const handleTitleSubmit = async (e) => {
    e.preventDefault();
    const tasks = await dispatch(
      editTaskThunk(title, task.icon, task.id, task.categoryId)
    );
    setTasks(tasks);
    closeModal();
  };

  return (
    <>
      <div>
        <h1>Change task title</h1>
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
    </>
  );
};
