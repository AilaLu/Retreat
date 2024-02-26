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
    if (email.length < 3 || email.length > 40)
      errors.email = "email should be more than 3 and less than 40 characters.";
    if (!validateEmail(email)) errors.email = "please enter valid email";
    if (username.length < 3 || username.length > 40)
      errors.username =
        "username should be more than 3 and less than 40 characters.";
    if (firstName.length < 3 || firstName.length > 40)
      errors.firstName =
        "firstName should be more than 3 and less than 40 characters.";
    if (lastName.length < 3 || lastName.length > 40)
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

  const hasErrors = Object.keys(errors).length > 0;
  let signupBtn = ""
  if (!hasErrors) signupBtn = "signup-butt-signup-page";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(hasErrors) return 
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
            <div id="form-field">
              <label>
                Email
                <input
                  type="text"
                  value={email}
                  placeholder="for example: littletwirl@wiggle.com"
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="^\S+@\S+$"
                  required
                />
              </label>
              <div className="errors">
                {errors.email && <p>{errors.email}</p>}
              </div>
            </div>
            <div id="form-field">
              <label>
                Username
                <input
                  type="text"
                  value={username}
                  placeholder="littleTwirl"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
              <div className="errors">
                {errors.username && <p>{errors.username}</p>}
              </div>
            </div>

            <div id="form-field">
              <label>
                First Name
                <input
                  type="text"
                  value={firstName}
                  placeholder="Wiggle"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
              <div className="errors">
                {errors.firstName && <p>{errors.firstName}</p>}
              </div>
            </div>

            <div id="form-field">
              <label>
                Last Name
                <input
                  type="text"
                  value={lastName}
                  placeholder="Button"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>
              <div className="errors">
                {errors.lastName && <p>{errors.lastName}</p>}
              </div>
            </div>

            <div id="form-field">
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  placeholder="put your darkest secret here"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <div className="errors">
                {errors.password && <p>{errors.password}</p>}
              </div>
            </div>

            <div id="form-field">
              <label>
                Confirm Password
                <input
                  type="password"
                  value={confirmPassword}
                  placeholder="same as the above"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
              <div className="errors">
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
              </div>
            </div>
          </div>

          <button id={signupBtn} type="submit" disabled={hasErrors}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignupFormPage;
