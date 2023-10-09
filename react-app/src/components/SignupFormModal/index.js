import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  // ! https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

  useEffect(() => {
    const errors = [];
    if (!validateEmail(email)) errors.push( "email: please enter valid email"); 
    if (password.length < 8) errors.push( "password: password should be more than 8 characters");    
    if (password !== confirmPassword) errors.push("password: Confirm Password field must be the same as the Password field");   
    setErrors(errors);
  }, [email, password, confirmPassword]);



  const handleSubmit = async (e) => {
    e.preventDefault();
      const data = await dispatch(
        signUp(username, email, password, firstName, lastName)
      );
      if (data) {
        setErrors(data);
      } else {
        closeModal();
      }
    }

  return (
    <div className="signup-modal">
      <div className="signup-title">Create your account</div>
      <div className="signup-subtitle">Registration is easy.</div>
      <form className="signup-form" onSubmit={handleSubmit}>
        {errors.length ? (
          <ul className="errors">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
        <label className="signup-field">
          Email address
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="^\S+@\S+$"
            required
          />
        </label>
        <label className="signup-field">
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="signup-field">
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label className="signup-field">
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label className="signup-field">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="signup-field">
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button className="signup-button grow" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default SignupFormModal;
