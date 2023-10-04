// import { deleteCategoryThunk } from "../../../store/categoryReducer";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
// import "./AddCategoryModal.css";

 export const IconSelectModal = ({categoryId}) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await dispatch(deleteCategoryThunk(categoryId)).then(closeModal)
};

  return (
    <>
      <h1>Select an icon for your new task</h1>
      <form onSubmit= {handleSubmit}>
        <div className="padding-bottom">
          <button className="big grey button" onClick={closeModal}>
            btn 1
          </button>
          <button className="big green button" type="submit" onClick={handleSubmit}>
            btn 2
          </button>
        </div>
      </form>
    </>
  );
}


