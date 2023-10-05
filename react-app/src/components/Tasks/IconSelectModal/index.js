import {useState} from "react"
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { icons } from "../../../assets/icon";
import { addTaskThunk } from "../../../store/taskReducer";
import "./IconSelectModal.css";

export const IconSelectModal = ({ categoryId}) => {
 const dispatch = useDispatch();
 const [modalSwitch, setModalSwitch] = useState("select icon")
 const [taskIcon, setTaskIcon] = useState("")
 const [title, setTitle] = useState("");
 const [errors, setErrors] = useState([]);
 const { closeModal } = useModal();

 const handleIconSubmit = async (e) => {
  e.preventDefault();
  //! send task icon and categoryId, render task title form to collect task title
  setModalSwitch("task title") //render the task title form
  // console.log('************icon from btn data property**********', e.target.src);
  setTaskIcon(e.target.src)
 };

 const handleTitleSubmit = async (e) => {
  e.preventDefault();
  await dispatch(addTaskThunk(title, taskIcon, categoryId)).then(closeModal)
 };
 
 // console.log("icons", icons);
//! if the modalState is "icon modal" render the icon selections, if the modalState is "task title" render the task input form for task title
  return (
    <>
      {modalSwitch === "select icon" ? 
      <div>
      <h1>Select an icon for your new task</h1>
      <form onSubmit={handleIconSubmit}>
        <div className="">
          {icons.map((icon, index) => (
            <button key={index} className="" type="submit" onClick={handleIconSubmit} data-icon={icon}>
              <img src={icon} alt="" />
            </button>
          ))}
        </div>
      </form></div>: null}
      {modalSwitch === "task title" ?  <div>
      <h1>Enter task title</h1>
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
      </form></div>: null}
    </>
  );
};

