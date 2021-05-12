import React, { useEffect } from "react";
import "./App.css";
import "../../static/styles/main.scss";
import Routes from "../../routes/Routes";
import { useDispatch } from "react-redux";
import { getUser } from "../../@redux/users/operation";
import { getPosts } from "../../@redux/posts/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
