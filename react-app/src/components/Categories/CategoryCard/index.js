import { useEffect } from "react";
import OpenModalButton from "../../OpenModalButton";
import { EditCategoryModal } from "../EditCategoryModal";
import { DeleteCategoryModal } from "../DeleteCategoryModal";
import { IconSelectModal } from "../../Tasks/IconSelectModal";
import "./CategoryCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../../../store/categoryReducer";
import { getTasksThunk } from "../../../store/taskReducer";
import { OpenTaskModal } from "../../Tasks/OpenTaskModal";
import { TaskModal } from "../../Tasks/TaskModal";

export const CategoryCard = ({ category }) => {
  const dispatch = useDispatch();
  const tasks = Object.values(category.tasks);
  // const lastestTasks = Object.values(useSelector((state) => state.tasks))

  useEffect(() => {
    dispatch(getTasksThunk(category.id));
    // dispatch(getCategoriesThunk())
    console.log(
      "when there are changes with the tasks, the page should re-render:)"
    );
  }, [dispatch]);

  if (!tasks) return null;
  return (
    <session className="border">
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
          <div className="task">
            <OpenTaskModal
              key={task.id}
              width="48"
              height="48"
              src={task.icon}
              alt={task.title}
              // buttonStyle={}
              modalComponent={<TaskModal task={task} />}
            />
            <div key={task.id}>{task.title}</div>
          </div>
        ))}
      </div>
      <div className="add-task">
        <OpenModalButton
          buttonText="Create New Task"
          // buttonStyle={}
          modalComponent={<IconSelectModal categoryId={category.id} />}
        />
      </div>
    </session>
  );
};

{
  /* <img key={task.id} width="48" height="48" src={task.icon} alt={task.title} />; */
}
