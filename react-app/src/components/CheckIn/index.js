import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../../store/categoryReducer";
import { addCheckInThunk, editCheckInThunk } from "../../store/checkInReducer";
import { CheckInCard } from "./CheckInCard";
import { moods } from "../../assets/icon";
import "./CheckIn.css";
import { useContext } from "react";
import { DateContext } from "../../context/onClickdate";

export const CheckIn = () => {
  const dispatch = useDispatch();
  const {  year, month, date, findCheckIn } = useContext(DateContext);
  const [selectedMood, setSelectedMood] = useState(findCheckIn?.mood)

  const user = useSelector((state) => state.session.user);
  const categoriesObj = useSelector((state) => state.categoryReducer);
  const categoriesArr = Object.values(categoriesObj);

  let refs = useRef()

  const CheckInMoodSubmit = async (e) => {
    e.preventDefault();
    // ! create or update checkin
    let mood = e.target.src;
    setSelectedMood(mood)
    e.target.className = "color-img"
    // console.log("=========checkin for that day=======", findCheckIn)
    
    if(!findCheckIn) {
      // console.log("====add mood for the day======");
      dispatch(addCheckInThunk(mood, year, month, date));
      return
    }
    
    if(findCheckIn?.mood) {
      console.log("======update mood for the day=====", mood);
      console.log(findCheckIn.id);
      dispatch(editCheckInThunk(mood, year, month, date, findCheckIn.id))
      return
    }
  };


  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  if (!user) return null;

  // *if the user has no task, redirect to manage_tasks page
  return (
    <>
      <div>Hello {user.username}:) Let's check in for {year}/{month}/{date}</div>
      <section className="moods">
        {moods.map((mood, index) => (
          <div className="mood" key={index}>
            <button
              width="48"
              height="48"
              type="submit"
              onClick={CheckInMoodSubmit}
            >
              <img className={selectedMood === mood ? "color-img":"grey-img"} src={mood} alt="" />
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
