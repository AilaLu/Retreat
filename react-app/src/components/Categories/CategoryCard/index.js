import { useEffect, useState } from "react";
import OpenModalButton from "../../OpenModalButton";
import { EditCategoryModal } from "../EditCategoryModal";
import { DeleteCategoryModal } from "../DeleteCategoryModal";
import { IconSelectModal } from "../../Tasks/IconSelectModal";
import "./CategoryCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getTasksThunk } from "../../../store/taskReducer";
import { OpenTaskModal } from "../../Tasks/OpenTaskModal";
import { TaskModal } from "../../Tasks/TaskModal";

export const CategoryCard = ({ category }) => {
  const dispatch = useDispatch();
  const tasksProp = Object.values(category.tasks);
  const latestTasks = Object.values(useSelector((state) => state.tasks));
  const [tasks, setTasks] = useState(tasksProp);

  // console.log(
  //   "=============I am re-rendering when a new task is added!!!=================="
  // );
  useEffect(() => {
    dispatch(getTasksThunk(category.id));
  }, [dispatch]);

  if (!tasks) return null;
  return (
    <>
      <div className="edit-delete-category">
        <OpenModalButton
          buttonText="Edit Category"
          // buttonStyle={}
          modalComponent={<EditCategoryModal categoryId={category.id} />}
        />
        <OpenModalButton
          buttonText="Delete Category"
          // buttonStyle={}
          modalComponent={<DeleteCategoryModal categoryId={category.id} />}
        />
      </div>
      <section className="category-card">
        {/* <h6>Category id {category.id}</h6> */}
        <h3>{category.name}</h3>
        <div className="tasks">
          {tasks.map((task) => (
            <div key={task.id} className="task-icon">
              <OpenTaskModal
                width="48"
                height="48"
                src={task.icon}
                alt={task.title}
                // buttonStyle={}
                modalComponent={<TaskModal task={task} setTasks={setTasks} />}
              />
              <div className="task-title">{task.title}</div>
            </div>
          ))}
        </div>
        <div className="add-task">
          <OpenTaskModal
            // buttonStyle={}
            width="48"
            height="48"
            src="https://img.icons8.com/color/96/plus--v1.png"
            alt="plus"
            modalComponent={
              <IconSelectModal categoryId={category.id} setTasks={setTasks} />
            }
          />
          <div className="new-task">New Task</div>
        </div>
      </section>
    </>
  );
};
