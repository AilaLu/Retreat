import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCategoryModal } from "../AddCategoryModal";
import { NavLink } from "react-router-dom";
import "./AllCategories.css";
import { getCategoriesThunk } from "../../../store/categoryReducer";
import { CategoryCard } from "../CategoryCard";
import { OpenTaskModal } from "../../Tasks/OpenTaskModal";

export const AllCategories = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const categoriesObj = useSelector((state) => state.categoryReducer);
  const categoriesArr = Object.values(categoriesObj);

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  if (!user) return null;

  return (
    <>
      <div>Hello {user.username}:)</div>
      <p>Click on the block to add a new category!</p>
      {/* <section className="moods">
        {moods.map((mood, index) => (
          <div className="mood" key={index}>
            <button className="" type="submit" onClick={handleMoodSubmit}>
              <img src={mood} alt="" />
            </button>
          </div>
        ))}
      </section> */}
      <section className="categories">
        {categoriesArr.map((category) => (
          <CategoryCard category={category} key={category?.id} />
        ))}
      </section>
      <div className="add-category">
        <OpenTaskModal
          width="48"
          height="48"
          src="https://img.icons8.com/color/96/plus--v1.png"
          alt="plus"
          modalComponent={<AddCategoryModal />}
        />
        <div className="new-category">New Category</div>
      </div>
      <div className="center-container">
        <div className="back-to-calendar">
          <NavLink exact to="/">
            Go Back to calender{"   "}
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/external-those-icons-flat-those-icons/96/external-Clover-objects-those-icons-flat-those-icons.png"
              alt="Clover-icon"
            ></img>{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};
