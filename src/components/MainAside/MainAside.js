import React from "react";
import { useSelector } from "react-redux";
import OtherUsers from "../OtherUsers/OtherUsers";
import UserContainer from "../UserContainer/UserContainer";
import MenuButton from "../MenuButton/MenuButton";
import styles from "./MainAside.module.scss";

const MainAside = () => {
  const users = useSelector((state) => state.userReducer.users.data);
  const userSubscribedUsers = useSelector(
    (state) => state.userReducer.user.subscribed
  );

  // console.log("subs", userSubscribedUsers);

  return (
    <>
      <div className={styles.menuButtonContainer}>
        <MenuButton />
      </div>
      <UserContainer />
      <OtherUsers title={"Розповіді"} users={userSubscribedUsers} />
      <OtherUsers title={"Рекомендації"} users={users} recommendation />
    </>
  );
};

export default MainAside;
