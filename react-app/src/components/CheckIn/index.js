import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
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
  const { year, month, date, findCheckIn } = useContext(DateContext);
  const [selectedMood, setSelectedMood] = useState(findCheckIn?.mood);

  const user = useSelector((state) => state.session.user);
  const categoriesObj = useSelector((state) => state.categoryReducer);
  const categoriesArr = Object.values(categoriesObj);

  const CheckInMoodSubmit = async (e) => {
    e.preventDefault();
    // ! create or update checkin
    let mood = e.target.src;
    setSelectedMood(mood);
    e.target.className = "color-img";

    if (!findCheckIn) {
      dispatch(addCheckInThunk(mood, year, month, date));
      return;
    }

    if (findCheckIn?.mood) {
      dispatch(editCheckInThunk(mood, year, month, date, findCheckIn.id));
      return;
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    // console.log("============formData============", formData);
    // console.log("============image============", image);

    // ! dispatch upload image thunk
    await dispatch(addImageThunk(findCheckIn.id, formData));
  };

  const deleteImage = async (e) => {
    e.preventDefault();
    const imageId = e.target.dataset.imageid;
    console.log("============imageId============", imageId);

    await dispatch(deleteImageThunk(imageId));
  };

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  if (!user) return null;

  // *if the user has no task, redirect to manage_tasks page
  return (
    <>
      <div>
        Hello {user.username}:) Let's check in for {year}/{month}/{date}
      </div>
      <section className="moods">
        {moods.map((mood, index) => (
          <div className="mood" key={index}>
            <button
              width="48"
              height="48"
              type="submit"
              onClick={CheckInMoodSubmit}
            >
              <img
                className={selectedMood === mood ? "color-img" : "grey-img"}
                src={mood}
                alt=""
              />
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
      {findCheckIn ? (
        <section className="upload-image">
          <h3>Today's photos</h3>
          <form enctype="multipart/form-data" onSubmit={uploadImage}>
            <label
            // htmlFor="image"
            >
              <input
                id="input-image"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </label>
            {/* {image? <div >
                <img src="photo-not-hosted-yet" alt={image.name} />
              </div>: null} */}
            <button className="upload-image-button" type="submit">
              Upload
            </button>
          </form>
          <div className="checkIn-images">
            {findCheckIn?.images.map((image, id) => (
              <div className="checkIn-images-container" key={id}>
                <div className="delete-image">
                  <button onClick={deleteImage}>
                    <img
                      data-imageid={image.id}
                      width="30"
                      height="30"
                      src="https://img.icons8.com/color/96/cancel--v1.png"
                      alt="cancel--v1"
                    />
                  </button>
                </div>
                <img
                  className="checkIn-image"
                  src={image.image}
                  alt={image.image}
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}
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
