//* Edit and delete task

import OpenModalButton from "../../OpenModalButton";
import { EditIconModal } from "../EditIconModal";
import { EditTitleModal } from "../EditTitleModal";
import { DeleteTaskModal } from "../DeleteTaskModal";
import "./TaskModal.css";

export const TaskModal = ({ task, setTasks }) => {
  // console.log("===========task", task.categoryId);

  return (
    <>
      <section className="icon">
        <img src={task.icon} alt={task.title} />
        <div>{task.title}</div>
      </section>
   
        <section className="edit-delete-task">
          <div>
            <OpenModalButton
              buttonText="Change icon"
              buttonStyle="edit-delete-task-btn"
              modalComponent={<EditIconModal task={task} setTasks={setTasks}/>}
            />
          </div>
          <div>
            <OpenModalButton
              buttonText="Change title"
              buttonStyle="edit-delete-task-btn"
              modalComponent={<EditTitleModal task={task} setTasks={setTasks}/>}
            />
          </div>
          <div>
            <OpenModalButton
              buttonText="Delete task"
              buttonStyle="edit-delete-task-btn"
              modalComponent={<DeleteTaskModal task={task} setTasks={setTasks}/>}
            />
          </div>
        </section>
    </>
  );
};
