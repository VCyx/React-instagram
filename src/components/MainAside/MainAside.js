import React from "react";
import MenuButton from "../MenuButton/MenuButton";
import { useSelector } from "react-redux";
import OtherUsers from "../OtherUsers/OtherUsers";
import UserContainer from "../UserContainer/UserContainer";

const MainAside = () => {
  // всі юзери
  const users = useSelector((state) => state.userReducer.users.data);
  // console.log(users);

  return (
    <>
      <MenuButton />
      <UserContainer />
      <OtherUsers title={"Розповіді"} users={users} />
      <OtherUsers title={"Рекомендації"} users={users} recommendation />
    </>
  );
};

export default MainAside;
