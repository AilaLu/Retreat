import React, { useEffect, useState } from "react";
import { editCategoryThunk } from "../../../store/categoryReducer";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
// import "./AddCategoryModal.css";

export const EditCategoryModal = ({ category }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(category.name);
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  useEffect(() => {
    const errors = {};
    if (name.length < 1) errors.name = "please enter category name";
    if (name.length > 50) errors.name = "category name should be under 100 characters";    
    setErrors(errors);
  }, [name]);

  const hasErrors = Object.keys(errors).length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(hasErrors) return 
    // console.log("*********** in the edit modal***********", categoryId);

    await dispatch(editCategoryThunk(name, category.id)).then(closeModal);
  };

  return (
    <div className="edit-category modal">
      <h1>Change Category Name</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <div className="errors">{errors.name && <p>{errors.name}</p>}</div>
        <div className="modal-btns">
          <button className="big-grey-btn" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="big-green-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};
