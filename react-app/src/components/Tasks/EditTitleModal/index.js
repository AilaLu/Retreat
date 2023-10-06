import {useState} from "react"
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { editTaskThunk } from "../../../store/taskReducer";

export const EditTitleModal = ({ task, setTasks }) => {
 const dispatch = useDispatch();
 const [title, setTitle] = useState("");
 const [errors, setErrors] = useState([]);
 const { closeModal } = useModal();


 const handleTitleSubmit = async (e) => {
  e.preventDefault();
  const tasks = await dispatch(editTaskThunk(title, task.icon, task.id, task.categoryId))
  setTasks(tasks)
  closeModal()
 };

  return (
    <>
     <div>
      <h1>Change task title</h1>
      <form onSubmit= {handleTitleSubmit}>
      
        <label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <div className="errors">
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="padding-bottom">
          <button className="big grey button" onClick={closeModal}>
            Cancel
          </button>
          <button className="big green button" type="submit" onClick={handleTitleSubmit}>
            Done
          </button>
        </div>
      </form></div>
    </>
  );
};

