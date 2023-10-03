import React, { useState } from "react";
import { addCategory } from "../../../store/categoryReducer";
import { useDispatch } from "react-redux";
// import { useModal } from "../../context/Modal";
import "./AddCategoryModal.css";

 export const AddCategoryModal = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  // const { closeModal } = useModal();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = await dispatch(addCategory());
  //   if (data) {
  //     setErrors(data);
  //   } else {
  //       closeModal()
  //   }
  // };

  return (
    <>
      <h1>Create New Category</h1>
      {/* <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add</button>
      </form> */}
    </>
  );
}


