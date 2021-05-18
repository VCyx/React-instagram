import React from "react";
import { useSelector } from "react-redux";
import OtherUsers from "../OtherUsers/OtherUsers";
import UserContainer from "../UserContainer/UserContainer";
import MenuButton from "../MenuButton/MenuButton";
import styles from "./MainAside.module.scss";

const MainAside = () => {
  const userSubscribedUsers = useSelector(
    (state) => state.userReducer.user.subscribed
  );
  const randomUsers = useSelector(
    (state) => state.userReducer.user.randomUsers
  );

  // console.log("subs", userSubscribedUsers);

  return (
    <>
      <div className={styles.menuButtonContainer}>
        <MenuButton />
      </div>
      <UserContainer />
      <OtherUsers title={"Розповіді"} users={userSubscribedUsers} />
      <OtherUsers title={"Рекомендації"} users={randomUsers} recommendation />
    </>
  );
};

export default MainAside;
