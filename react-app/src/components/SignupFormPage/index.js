import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignupForm.css";

// adding email validation

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  // ! https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

  useEffect(() => {
    const errors = {};
    if (email < 3 || email > 40)
      errors.email = "email should be more than 3 and less than 40 characters.";
    if (!validateEmail(email)) errors.email = "please enter valid email";
    if (username < 3 || lastName > 40)
      errors.username =
        "username should be more than 3 and less than 40 characters.";
    if (firstName < 3 || firstName > 40)
      errors.firstName =
        "firstName should be more than 3 and less than 40 characters.";
    if (lastName < 3 || lastName > 40)
      errors.lastName =
        "lastName should be more than 3 and less than 40 characters.";
    if (password.length < 8)
      errors.password = "password should be more than 8 characters";
    if (password !== confirmPassword)
      errors.confirmPassword =
        "confirm Password field must be the same as the Password field";
    setErrors(errors);
  }, [email, firstName, lastName, username, password, confirmPassword]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(
      signUp(username, email, password, firstName, lastName)
    );
    if (data) {
      setErrors(data);
    }
  };

  return (
    <div id="signup-entire-page">
      <div id="inner-signup-page">
        <h1>Sign Up</h1>
        <form id="form-signup-page" onSubmit={handleSubmit}>
          <div id="whole-form-signup-page">
            <div id="email-signup-page">
              <label>
                Email
                <input
                  id="email-input-signup-page"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="^\S+@\S+$"
                  required
                />
              </label>
              <div className="errors">
                {errors.email && <p>{errors.email}</p>}
              </div>
            </div>
            <div id="username-signup-page">
              <label>
                Username
                <input
                  id="username-input-signup-page"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
              <div className="errors">
                {errors.username && <p>{errors.username}</p>}
              </div>
            </div>

            <div id="firstname-signup-page">
              <label>
                First Name
                <input
                  id="firstname-input-signup-page"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
              <div className="errors">
                {errors.firstName && <p>{errors.firstName}</p>}
              </div>
            </div>

            <div id="lastname-signup-page">
              <label>
                Last Name
                <input
                  id="lastname-input-signup-page"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>
              <div className="errors">
                {errors.lastName && <p>{errors.lastName}</p>}
              </div>
            </div>

            <div id="password-signup-page">
              <label>
                Password
                <input
                  id="password-input-signup-page"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <div className="errors">
                {errors.password && <p>{errors.password}</p>}
              </div>
            </div>

            <div id="confirm-password-signup-page">
              <label>
                Confirm Password
                <input
                  id="confirm-password-input-signup-page"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
              <div className="errors">
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
              </div>
            </div>
          </div>

          <button id="signup-butt-signup-page" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignupFormPage;
