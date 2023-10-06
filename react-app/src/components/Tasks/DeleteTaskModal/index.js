import { deleteTaskThunk } from "../../../store/taskReducer";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
// import "./AddCategoryModal.css";

export const DeleteTaskModal = ({ task, setTasks }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tasks = await dispatch(deleteTaskThunk(task.id, task.categoryId));
    setTasks(tasks);
    closeModal();
  };

  return (
    <>
      <h1>Are you sure you want to delete?</h1>
      <div>All the records of this icon will be deleted.</div>
      <form onSubmit={handleSubmit}>
        <div className="modal-btns">
          <button className="big-grey-btn" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="big-green-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
};
