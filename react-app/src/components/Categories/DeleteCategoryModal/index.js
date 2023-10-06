import { deleteCategoryThunk } from "../../../store/categoryReducer";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
// import "./AddCategoryModal.css";

export const DeleteCategoryModal = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(deleteCategoryThunk(categoryId)).then(closeModal);
  };

  return (
    <>
      <h1>Are you sure you want to delete?</h1>
      <div>All the records of this category block will be deleted.</div>
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
