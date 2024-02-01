import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../../store/categoryReducer";
import { getCheckInsThunk } from "../../store/checkInReducer";
// import 'react-calendar/dist/Calendar.css'
import "./Calendar.css";
import Calendar from "react-calendar";
import { DateContext } from "../../context/onClickdate";

export const CalendarPage = () => {
  const dispatch = useDispatch();
  const { selectedDate, setSelectedDate, year, month, date, findCheckIn } = useContext(DateContext);

  // console.log("==========checkin========", findCheckIn)

  const user = useSelector((state) => state.session.user);
  const categoryArr = Object.values(useSelector((state) => state.categoryReducer));


  const tileClassName = ({ date, view }) => {
    // Check if the current date is the selected date
    const isSelected = selectedDate && date.toISOString().slice(0, 10) === selectedDate.toISOString().slice(0, 10);
    console.log("lalalalalalala", selectedDate);
    // Add a custom class if the date is selected
    return isSelected ? 'selected-date' : "day-btn";
  };
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Add any other logic you need when the date changes
  };

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
  //* if the user has tasks, show the calendar; if user has no category/task created yet, guide them to manage tasks.
  return (
    <div className="guide-to-manage-tasks">
      <div>Hello {user.username}:)</div>
     
      {!categoryArr ? (
        <section>
          <div>
          Let's go create some tasks for daily self-care{" "}
          </div>
     
          <div className="go-add-task">
            <NavLink exact to="/manage_tasks">
              Go{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </section>
      ) : (
        <section className="calendar">
        <p>Hover on the calendar and select the date for a check-in!</p>
          <Calendar
            value={selectedDate} //!value looks like this:  Thu Sep 28 2023 00:00:00 GMT-0700 (Pacific Daylight Time)
            locale="en-GB"
            className="calendar"
            minDetail="decade"
            onClickDay={(e) => setSelectedDate(e)}
            // 
            tileClassName={tileClassName}
            // 
            onChange={handleDateChange}
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
