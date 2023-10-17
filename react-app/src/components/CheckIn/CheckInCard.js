// !all moods and tasks should be greyd out going in the page
import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksThunk } from "../../store/taskReducer";
import { addCheckInTaskThunk } from "../../store/checkInReducer"
import { deleteCheckInTaskThunk } from "../../store//checkInReducer"
import { DateContext } from "../../context/onClickdate";
import "./CheckIn.css";

export const CheckInCard = ({ category }) => {
  const dispatch = useDispatch();
  const tasks = Object.values(category.tasks);
  const {findCheckIn} = useContext(DateContext)
  const doneTask = findCheckIn.checkInTasks.map(task => task.taskId) //an array of the tasks done for the day
  console.log("=========checkin tasks for the day obj", );

  const CheckInTaskSubmit = async (e) => {
    e.preventDefault();
    // * task done --> create checkInTask
    let checkInId = findCheckIn?.id
    let taskId = parseInt(e.target.dataset.taskid)

    if(e.target.className === "grey-img") {
      e.target.className = "color-img"
      dispatch(addCheckInTaskThunk(checkInId, taskId));
      console.log("======task done for ", e.target.alt);
      return
    }
    
    // * task undone --> delete checkInTask
    if(e.target.className === "color-img") {
      e.target.className = "grey-img"
      dispatch(deleteCheckInTaskThunk(checkInId, taskId))
      console.log("========task UNDONE for ", e.target.alt);
      return
    }
  };

  useEffect(() => {
    dispatch(getTasksThunk(category.id));
  }, [dispatch]);

  if (!tasks) return null;
  return (
    <>
    {/* ternary operator: once you check into mood, you can then check into tasks */}
    {findCheckIn?  <section className="category-card">
        <h3>{category.name}</h3>
        <div className="tasks">
          {tasks.map((task) => {
            {/* if you already checked in for this task this day, the task is already colored */}
              if(doneTask.find(taskId => taskId === task.id)){
                return  <div key={task.id} className="task-icon">
              <button type="submit" onClick={CheckInTaskSubmit}>
                <img className="color-img" width="48" height="48" src={task.icon} alt={task.title} data-taskid={task.id}/>
              </button>
              <div className="task-title">{task.title}</div>
            </div> 
              }
              else{
                return <div key={task.id} className="task-icon">
              <button type="submit" onClick={CheckInTaskSubmit}>
                <img className="grey-img" width="48" height="48" src={task.icon} alt={task.title} data-taskid={task.id}/>
              </button>
              <div className="task-title">{task.title}</div>
            </div> 
              }

          })}
        </div>
      </section>: null}
    </>
  );
};
