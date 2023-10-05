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
  const latestTasks = Object.values(useSelector((state) => state.tasks))
  const [tasks, setTasks] = useState(tasksProp)

  // console.log(
  //   "=============I am re-rendering when a new task is added!!!=================="
  // );
  useEffect(() => {
    dispatch(getTasksThunk(category.id));
    }, [dispatch]);
    

    if (!tasks) return null;
    return (
    <section className="border">
      <h6>Category id {category.id}</h6>
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
      <div>{category.name}</div>
      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <OpenTaskModal
              width="48"
              height="48"
              src={task.icon}
              alt={task.title}
              // buttonStyle={}
              modalComponent={<TaskModal task={task} />}
            />
            <div>{task.title}</div>
          </div>
        ))}
      </div>
      <div className="add-task">
        <OpenModalButton
          buttonText="Create New Task"
          // buttonStyle={}
          modalComponent={<IconSelectModal categoryId={category.id} setTasks={setTasks} />}
        />
      </div>
    </section>
  );
};
