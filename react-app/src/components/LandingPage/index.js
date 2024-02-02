import "./LandingPage.css";
import { useSelector } from "react-redux";
import { CalendarPage } from "../CalendarPage";

export const  LandingPage = () => {
  const user = useSelector((state) => state.session.user);


  return (
    user?(
      <div>
        <CalendarPage/>
      </div>
     ):(
      <div className="landing-page">
      <div className="site-intro">
            Retreat is a simple tool to track your mood, daily task and store your daily photos.{" "}Click on the user profile button on the right upper corner to sign up or log in!
          </div>
          <div className="you-got-this">
            <img
              width="250"
              src="https://media0.giphy.com/media/xT0xeAIDaF8WaeHF6w/giphy.gif?cid=ecf05e474ipkfkv5pmyulhvu2r5f6lv9gw3ks79qo02s3jzs&ep=v1_gifs_related&rid=giphy.gif&ct=g"
              alt=""
            />
          </div>
    </div>
  )
   
  );
}

