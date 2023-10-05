//Edit and delete task

import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import OpenModalButton from "../../OpenModalButton";
// import "./AddCategoryModal.css";

export const TaskModal = ({ task }) => {

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
          // modalComponent={<EditIconModal task={task} />}
        />
        <OpenModalButton
          buttonText="Change title"
          // buttonStyle={}
          // modalComponent={<EditTitleModal task={task} />}
        />
      </session>

      <session className="delete icon">
        <OpenModalButton
          buttonText="Delete icon"
          // buttonStyle={}
          // modalComponent={<DeleteTaskModal task={task} />}
        />
      </session>
    </>
  );
};
