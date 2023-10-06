import React, { useEffect, useState } from "react";
import { editCategoryThunk } from "../../../store/categoryReducer";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
// import "./AddCategoryModal.css";

export const EditCategoryModal = ({ categoryId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  useEffect(() => {
    const errors = {};
    if (name.length < 1) errors.name = "please enter category name";
    setErrors(errors);
  }, [name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("*********** in the edit modal***********", categoryId);

    await dispatch(editCategoryThunk(name, categoryId)).then(closeModal);
  };

  return (
    <div className="edit-category modal">
      <h1>Add Category Name</h1>
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
