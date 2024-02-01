import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if (sessionUser) return <Redirect to="/" />;

  const signUp = () => {
    history.replace("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoSignIn = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <div id="log-in-entire-page">
      <div id="inner-login-page">
        <h1>Log In</h1>
        <form id="form-login-page" onSubmit={handleSubmit}>
          <div id="email-password-login-page">
            <div id="email-login-page">
              <ul className="errors">
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>

              <label>
                Email
                <input
                  id="email-input-login-page"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>

            <div id="password-login-page">
              <label>
                Password
                <input
                  id="password-input-login-page"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <button id="login-butt-login-page" type="submit">
            Log In
          </button>
          <div onClick={signUp} id="sign-up-login-page">
            Sign Up
          </div>
          <div id="demo-link-page" onClick={demoSignIn}>
            Demo User
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;
