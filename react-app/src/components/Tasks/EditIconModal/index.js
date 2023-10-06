import {useState} from "react"
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { icons } from "../../../assets/icon";
import { editTaskThunk } from "../../../store/taskReducer";

export const EditIconModal = ({ task, setTasks }) => {
 const dispatch = useDispatch();
 const { closeModal } = useModal();

 const handleIconSubmit = async (e) => {
  e.preventDefault();
  // console.log('=============edited icon==========', e.target.src);
  const taskIcon = e.target.src
  
  const tasks = await dispatch(editTaskThunk(task.title, taskIcon, task.id, task.categoryId))
  setTasks(tasks)
  closeModal()
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

