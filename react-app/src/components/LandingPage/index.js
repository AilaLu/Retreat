import { useEffect, useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../../store/categoryReducer";
import { getCheckInsThunk } from "../../store/checkInReducer";
// import 'react-calendar/dist/Calendar.css'
import "./LandingPage.css";
import "./Calendar.css"
import Calendar from "react-calendar";
import { DateContext } from "../../context/onClickdate";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const { value, setValue, year, month, date, findCheckIn } = useContext(DateContext);

  console.log("==========checkin========", findCheckIn)

  const user = useSelector((state) => state.session.user);
  const categoryObj = useSelector((state) => state.categoryReducer);


  let dayButton = "day-btn";
  //! if checkIn.mood === "https://img.icons8.com/color/96/fat-emoji.png", that date shows the mood

  //! if the mood exists, whn you click on it it shows the mood and task for the day, if not, redirect to check_in page

  // dayButton = "day-btn mood-happy"
  // dayButton = "day-btn mood-meh"
  // dayButton = "day-btn mood-sad"


  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getCheckInsThunk());
  }, [dispatch]);


  if (!user) return null;
  //* if the user has tasks show calendar; if they don't, show the lil duck gif + btn to create task
  return (
    <div className="landing-page">
      <div>Hello {user.username}:)</div>
      {!categoryObj ? (
        <section>
          <div>
            Retreat is a simple tool to track your mood, daily task and journal.{" "}
          </div>
          <img
            width="250"
            src="https://media0.giphy.com/media/xT0xeAIDaF8WaeHF6w/giphy.gif?cid=ecf05e474ipkfkv5pmyulhvu2r5f6lv9gw3ks79qo02s3jzs&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            alt=""
          />
          <div className="go-add-task">
            <NavLink exact to="/manage_tasks">
              Let's go create some tasks for daily self-care{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </section>
      ) : (
        <section className="calendar">
          <Calendar
            value={value} //!value looks like this:  Thu Sep 28 2023 00:00:00 GMT-0700 (Pacific Daylight Time)
            locale="en-GB"
            className="calendar"
            minDetail="decade"
            onClickDay={(e) => setValue(e)}
            tileClassName={dayButton}
          />

          <div className="go-checkin">
            <NavLink exact to="/check_in">
              Go check In for {year}/{month}/{date}{"   "}
              <img width="35" height="35" src="https://img.icons8.com/external-those-icons-flat-those-icons/96/external-Clover-objects-those-icons-flat-those-icons.png" alt="Clover-icon"></img>{" "}<i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
          {findCheckIn? <div className="date-task-done-block">
            <div className="landing-page-mood">
              mood:
              <img width="48" height="48" src={findCheckIn?.mood} alt="" />
            </div>
            <div className="landing-page-done-tasks">
              task done for the day:{" "}
              {findCheckIn?.checkInTasks.map((checkIn, id) => (
                <img
                  key={id}
                  src={checkIn.task.icon}
                  width="48"
                  height="48"
                  alt={checkIn.task.title}
                />
              ))}
            </div>
            <div className="landing-page-image">
              image:{" "}
              {findCheckIn?.images.map((image, id) => (
                <img
                  key={id}
                  src={image.image}
                  width="200"
                  height="200"
                  alt={image.image}
                />
              ))}
            </div>
          </div>: null}
        </section>
      )}
    </div>
  );
};
