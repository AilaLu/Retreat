import {useState} from "react"
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { icons } from "../../../assets/icon";
import { editTaskThunk } from "../../../store/taskReducer";

export const EditIconModal = ({ task }) => {
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

 
  return (
    <>
      <div>
      <h1>Change an icon for your task</h1>
      <form onSubmit={handleIconSubmit}>
        <div className="">
          {icons.map((icon, index) => (
            <button key={index} className="" type="submit" onClick={handleIconSubmit} data-icon={icon}>
              <img src={icon} alt="" />
            </button>
          ))}
        </div>
      </form></div>
    </>
  );
};

