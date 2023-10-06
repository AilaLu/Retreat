import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCategoryModal } from "../AddCategoryModal";
import "./AllCategories.css";
import { getCategoriesThunk } from "../../../store/categoryReducer";
import { CategoryCard } from "../CategoryCard";
import { OpenTaskModal } from "../../Tasks/OpenTaskModal";
import { moods } from "../../../assets/icon";

export const AllCategories = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const categoriesObj = useSelector((state) => state.categories);
  const categoriesArr = Object.values(categoriesObj);

  const handleMoodSubmit = async (e) => {
    e.preventDefault();
    // const taskIcon = e.target.src

    // const tasks = await dispatch(editTaskThunk(task.title, taskIcon, task.id, task.categoryId))
    // setTasks(tasks)
    // closeModal()
  };

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  if (!user) return null;

  return (
    <>
      <div>Hello {user.username}:)</div>
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
          <CategoryCard category={category} key={category.id} />
        ))}
      </section>
      <div className="add-category">
        <OpenTaskModal
          // buttonStyle={}
          width="48"
          height="48"
          src="https://img.icons8.com/color/96/plus--v1.png"
          alt="plus"
          modalComponent={<AddCategoryModal />}
        />
        <div className="new-category">New Category</div>
      </div>
    </>
  );
};
