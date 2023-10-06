import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = <ProfileButton />;
  }

  //if logged in, then can manage tasks
  let manageTasks = "manageTasks";
  if (!sessionUser) manageTasks = "hidden";

  return (
    <div className="navigation">
      <div className="flex-space-between">
        <div className="logo">
          <NavLink exact to="/">
            <h4 className="logo-text">Retreat</h4>
          </NavLink>
        </div>
        <div className="manageTasks-profileBtn">
          <div className={manageTasks}>
            <NavLink exact to="/manage_tasks">
              Manage tasks
            </NavLink>
          </div>
          <div className="profile-btn">{isLoaded && sessionLinks}</div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
