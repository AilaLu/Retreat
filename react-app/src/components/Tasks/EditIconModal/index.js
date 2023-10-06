import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { icons } from "../../../assets/icon";
import { editTaskThunk } from "../../../store/taskReducer";

export const EditIconModal = ({ task, setTasks }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleIconSubmit = async (e) => {
    e.preventDefault();
    const taskIcon = e.target.src;

    const tasks = await dispatch(
      editTaskThunk(task.title, taskIcon, task.id, task.categoryId)
    );
    setTasks(tasks);
    closeModal();
  };

  return (
    <>
      <div>
        <h1>Change an icon for your task</h1>
        <form onSubmit={handleIconSubmit}>
          <div className="icons">
            {icons.map((icon, index) => (
              <div className="icon" key={index}>
                <button
                  type="submit"
                  onClick={handleIconSubmit}
                  data-icon={icon}
                >
                  <img width="48" height="48" src={icon} alt={task.title} />
                </button>
              </div>
            ))}
          </div>
          <button className="big-grey-btn" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};
