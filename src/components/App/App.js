import React, { useEffect } from "react";
import "./App.css";
import "../../static/styles/main.scss";
import Routes from "../../routes/Routes";
import {
  getRandomUsers,
  getUser,
  getUsersSubscribed,
} from "../../@redux/users/operation";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getUsersSubscribed());
    dispatch(getRandomUsers());
  }, []);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
