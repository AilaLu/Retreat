import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk } from "../../store/categoryReducer";
import { addCheckInThunk, editCheckInThunk } from "../../store/checkInReducer";
import { addImageThunk, deleteImageThunk } from "../../store/checkInReducer";
import { CheckInCard } from "./CheckInCard";
import { moods } from "../../assets/icon";
import "./CheckIn.css";
import { useContext } from "react";
import { DateContext } from "../../context/onClickdate";

export const CheckIn = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const {  year, month, date, findCheckIn } = useContext(DateContext);
  const [selectedMood, setSelectedMood] = useState(findCheckIn?.mood)

  const user = useSelector((state) => state.session.user);
  const categoriesObj = useSelector((state) => state.categoryReducer);
  const categoriesArr = Object.values(categoriesObj);

  const CheckInMoodSubmit = async (e) => {
    e.preventDefault();
    // ! create or update checkin
    let mood = e.target.src;
    setSelectedMood(mood)
    e.target.className = "color-img"

    if(!findCheckIn) {
      dispatch(addCheckInThunk(mood, year, month, date));
      return
    }
    
    if(findCheckIn?.mood) {
      dispatch(editCheckInThunk(mood, year, month, date, findCheckIn.id))
      return
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    console.log("============formData============", formData);

    // ! dispatch upload image thunk
    await dispatch(addImageThunk(findCheckIn.id, formData));

  }


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
       {/* ternary operator: once you check into mood, you can then check into tasks */}
    {findCheckIn?<section className="upload-image">
      <form enctype="multipart/form-data" onSubmit={uploadImage}>
      <label 
      // htmlFor="image"
      >
                <input id="input-image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
              </label>
             {image? <div >
                <img src={image} alt="upload" />
              </div>: null}
              <button type="submit">Upload</button>
        </form>
      </section>: null}
    </>
  );
};
