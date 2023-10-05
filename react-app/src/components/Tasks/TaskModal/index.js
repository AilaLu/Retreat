//Edit and delete task

import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import OpenModalButton from "../../OpenModalButton";
// import {EditTaskModal}
// import {EditTitleModal}
import { DeleteTaskModal } from "../DeleteTaskModal";
// import "./AddCategoryModal.css";

export const TaskModal = ({ task }) => {

  console.log('===========task', task.categoryId);
  
  return (
    <>
      <session className="icon">
        <img src={task.icon} alt={task.title} />
        <div>{task.title}</div>
      </session>
      <session className="edit icon">
        <OpenModalButton
          buttonText="Change icon"
          // buttonStyle={}
          // modalComponent={<EditIconModal taskId={task.id} />}
        />
        <OpenModalButton
          buttonText="Change title"
          // buttonStyle={}
          // modalComponent={<EditTitleModal taskId={task.id} />}
        />
      </session>

      <session className="delete icon">
        <OpenModalButton
          buttonText="Delete icon"
          // buttonStyle={}
          modalComponent={<DeleteTaskModal taskId={task.id} />}
        />
      </session>
    </>
  );
};
