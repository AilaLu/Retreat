import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../../store/categoryReducer";
import { getCheckInsThunk } from "../../store/checkInReducer";
import "./LandingPage.css";
import Calendar from "react-calendar";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());

  const user = useSelector((state) => state.session.user);
  const categoryObj = useSelector((state) => state.categoryReducer);
  const checkInObj = useSelector((state) => state.checkInReducer);
  const checkInArr = Object.values(checkInObj);

  let year = value.getUTCFullYear();
  let month = value.getUTCMonth() + 1;
  let date = value.getUTCDate();

  const findCheckIn = checkInArr.find(
    (checkIn) =>
      checkIn.year === year && checkIn.month === month && checkIn.date === date
  );

  console.log("=============value==============", value);
  console.log("=============year==============", year);
  console.log("=============month==============", month);
  console.log("=============date==============", date);
  console.log("=============checkin==============", findCheckIn);

  const handleMoodSubmit = async (e) => {
    e.preventDefault();
    // const taskIcon = e.target.src

    // const tasks = await dispatch(editTaskThunk(task.title, taskIcon, task.id, task.categoryId))
    // setTasks(tasks)
    // closeModal()
  };

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getCheckInsThunk());
  }, [dispatch]);

  //! by clicking on the date buttons you can see all the checkins for that specific day
  const viewCheckin = async (e) => {
    e.preventDefault();
    // const taskIcon = e.target.src
    // const tasks = await dispatch(getCheckInsThunk(checkinid))
    //! I guess check in id is associating with the year/month/date combination
  };

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
          <div className="go-checkin">
            <NavLink exact to="/check_in">
              Check In for the day
              <img src="https://img.icons8.com/color/96/fat-emoji.png" alt="" />
            </NavLink>
          </div>
          <Calendar
            // onChange={(value, event) => alert(`New date is: ${value}`)}
            value={value} //!value looks like this:  Thu Sep 28 2023 00:00:00 GMT-0700 (Pacific Daylight Time)
            locale="en-GB"
            className="react-calendar"
            minDetail="decade"
            onClickDay={(e) => setValue(e)}
          />

          <div>
            mood:
            <img src={findCheckIn?.mood} alt="" />
          </div>
          <div>
            task done for the day:{" "}
            {findCheckIn?.checkInTasks.map((task) => (
              <div key={task.taskId}>task {task.taskId}</div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
