import React, { useState } from "react";
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

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const data = await dispatch(
      signUp(username, email, password, firstName, lastName)
    );
    // console.log('data', data);// data is an array
    
    if (data) {
      setErrors(data);
      if(password !== confirmPassword){
        data.push("password: Confirm Password field must be the same as the Password field.")
        setErrors(data);
      } 
    }
  };

  return (
    <div id="signup-entire-page">
      <div id="inner-signup-page">
        <h1>Sign Up</h1>
        <form id="form-signup-page" onSubmit={handleSubmit}>
          <div id="whole-form-signup-page">
            <div id="email-signup-page">
              <ul className="errors">
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
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
