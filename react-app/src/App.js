import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { AllCategories } from "./components/Categories/AllCategories";
import { CheckIn } from "./components/CheckIn";
import { LandingPage } from "./components/LandingPage";
import {CalendarPage} from "./components/CalendarPage"
import Footer from "./components/Footer";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="app-wrapper">
      <Navigation isLoaded={isLoaded} />
      <main>

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <ProtectedRoute path="/calendar">
            <CalendarPage />
          </ProtectedRoute>
          <ProtectedRoute path="/manage_tasks">
            <AllCategories />
          </ProtectedRoute>
          <ProtectedRoute path="/check_in">
            <CheckIn />
          </ProtectedRoute>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
