import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTasksThunk } from "../../store/taskReducer";
import "./LandingPage.css";
import Calendar from "react-calendar";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());

  const user = useSelector((state) => state.session.user);
  const tasksObj = useSelector((state) => state.tasks);
  console.log('tasks', tasksObj);
  
  useEffect = () =>{
    dispatch(get)
  }

  const handleMoodSubmit = async (e) => {
    e.preventDefault();
    // const taskIcon = e.target.src

    // const tasks = await dispatch(editTaskThunk(task.title, taskIcon, task.id, task.categoryId))
    // setTasks(tasks)
    // closeModal()
  };

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
      {!tasksObj ? (
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
            // onChange={(value, event) => alert(`New date is: ${value}`)} 
            value={value}//!value looks like this:  Thu Sep 28 2023 00:00:00 GMT-0700 (Pacific Daylight Time)
            locale="en-GB"
            className="react-calendar"
            minDetail="decade"
            onClickDay={(value, event) => alert(`Clicked day: ${value}`)}
          />
          <div className="go-checkin">
            <NavLink exact to="/check_in">
              Check In for the day
              <img src="https://img.icons8.com/color/96/fat-emoji.png" alt="" />
            </NavLink>
          </div>
        </section>
      )}
    </div>
  );
};
