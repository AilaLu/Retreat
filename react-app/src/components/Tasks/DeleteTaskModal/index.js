import { deleteTaskThunk } from "../../../store/taskReducer";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
// import "./AddCategoryModal.css";

 export const DeleteTaskModal = ({task}) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await dispatch(deleteTaskThunk(task.id, task.categoryId)).then(closeModal)
};

  return (
    <>
      <h1>Are you sure you want to delete?</h1>
      <div>All the records of this icon will be deleted.</div>
      <form onSubmit= {handleSubmit}>
        <div className="padding-bottom">
          <button className="big grey button" onClick={closeModal}>
            Cancel
          </button>
          <button className="big green button" type="submit" onClick={handleSubmit}>
            Delete
          </button>
        </div>
      </form>
    </>
  );
}


