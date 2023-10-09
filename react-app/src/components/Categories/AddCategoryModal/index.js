import React, { useEffect, useState } from "react";
import { addCategoryThunk } from "../../../store/categoryReducer";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import "./AddCategoryModal.css";

export const AddCategoryModal = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  useEffect(() => {
    const errors = {};
    if (name.length < 1) errors.name = "please enter category name";
    if (name.length > 100) errors.name = "category name should be under 100 characters";
    setErrors(errors);
  }, [name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addCategoryThunk(name)).then(closeModal);
  };

  return (
    <>
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
    </>
  );
};
