//* Edit and delete task

import OpenModalButton from "../../OpenModalButton";
import { EditIconModal } from "../EditIconModal";
import { EditTitleModal } from "../EditTitleModal";
import { DeleteTaskModal } from "../DeleteTaskModal";
// import "./AddCategoryModal.css";

export const TaskModal = ({ task }) => {
  // console.log("===========task", task.categoryId);

  return (
    <>
      <section className="icon">
        <img src={task.icon} alt={task.title} />
        <div>{task.title}</div>
      </section>
      <section className="edit icon">
        <OpenModalButton
          buttonText="Change icon"
          // buttonStyle={}
          modalComponent={<EditIconModal task={task} />}
        />
        <OpenModalButton
          buttonText="Change title"
          // buttonStyle={}
          modalComponent={<EditTitleModal task={task} />}
        />
      </section>

      <section className="delete icon">
        <OpenModalButton
          buttonText="Delete icon"
          // buttonStyle={}
          modalComponent={<DeleteTaskModal task={task} />}
        />
      </section>
    </>
  );
};
