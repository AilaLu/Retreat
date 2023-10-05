import {useState} from "react"
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { editTaskThunk } from "../../../store/taskReducer";

export const EditTitleModal = ({ task }) => {
 const dispatch = useDispatch();
 const [modalSwitch, setModalSwitch] = useState("select icon")
 const [taskIcon, setTaskIcon] = useState("")
 const [title, setTitle] = useState("");
 const [errors, setErrors] = useState([]);
 const { closeModal } = useModal();


 const handleTitleSubmit = async (e) => {
  e.preventDefault();
  await dispatch(editTaskThunk(task.title, task.icon, task.id, task.categoryId))
  closeModal()
  // console.log('new tasks in icon select modal ===========', newtasks);

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

