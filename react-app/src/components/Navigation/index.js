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
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/external-those-icons-flat-those-icons/96/external-Clover-objects-those-icons-flat-those-icons.png"
              alt="external-Clover-objects-those-icons-flat-those-icons"
            />
            <div className="logo-text">Retreat</div>
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
