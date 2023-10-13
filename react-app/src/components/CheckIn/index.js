import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../../store/categoryReducer";
import { addCheckInThunk } from "../../store/checkInReducer";
import { CheckInCard } from "./CheckInCard";
import { moods } from "../../assets/icon";
import "./CheckIn.css";
import { useContext } from "react";
import { DateContext } from "../../context/onClickdate";

export const CheckIn = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const categoriesObj = useSelector((state) => state.categoryReducer);
  const categoriesArr = Object.values(categoriesObj);
  const dateObj = useContext(DateContext);

  console.log("=========clicked Date obj=======", dateObj);

  let refs = useRef()

  const CheckInMoodSubmit = async (e) => {
    e.preventDefault();
    let mood = e.target.src;
    //! if the mood is 
    e.target.className = "color-img"
    // setImgColor("color-img");
    dispatch(addCheckInThunk(mood, dateObj.year, dateObj.month, dateObj.date));

    // * create or update checkin
  };

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  if (!user) return null;

  // *if the user has no task, redirect to manage_tasks page
  return (
    <>
      <div>Hello {user.username}:) Let's check in</div>
      <section className="moods">
        {moods.map((mood, index) => (
          <div className="mood" key={index}>
            <button
              width="48"
              height="48"
              type="submit"
              onClick={CheckInMoodSubmit}
            >
              <img className="grey-img" src={mood} alt="" />
            </button>
          </div>
        ))}
      </section>
      <section className="categories">
        {categoriesArr.map((category) => (
          <CheckInCard category={category} key={category.id} />
        ))}
      </section>
    </>
  );
};
