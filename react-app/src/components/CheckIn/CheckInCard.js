// !Everything should be greyd out
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksThunk } from "../../store/taskReducer";
import "./CheckIn.css";

export const CheckInCard = ({ category }) => {
  const dispatch = useDispatch();
  const tasksProp = Object.values(category.tasks);

  const [tasks, setTasks] = useState(tasksProp);

  const CheckInTaskSubmit = async (e) => {
    e.preventDefault();
    e.target.className = "color-img"
    // * create or update checkinTask
    // const taskIcon = e.target.src;

    // const tasks = await dispatch(
    //   editTaskThunk(task.title, taskIcon, task.id, task.categoryId)
    // );
    // setTasks(tasks);
    // closeModal();
  };

  useEffect(() => {
    dispatch(getTasksThunk(category.id));
  }, [dispatch]);

  if (!tasks) return null;
  return (
    <>
      <section className="category-card">
        {/* <h6>Category id {category.id}</h6> */}
        <h3>{category.name}</h3>
        <div className="tasks">
          {tasks.map((task) => (
            <div key={task.id} className="task-icon">
              <button type="submit" onClick={CheckInTaskSubmit}>
                <img className="grey-img" width="48" height="48" src={task.icon} alt={task.title} />
              </button>
              <div className="task-title">{task.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
