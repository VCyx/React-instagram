import React, { useEffect } from "react";
import "./App.css";
import "../../static/styles/main.scss";
import Routes from "../../routes/Routes";
import { useDispatch } from "react-redux";
import { getUser } from "../../@redux/users/operation";
import { getPosts } from "../../@redux/posts/operations";
import { useHistory } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPosts()).catch((er) => {
      console.log(er);
      history.push("/404");
    });
    dispatch(getUser());
  }, [dispatch, history]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
