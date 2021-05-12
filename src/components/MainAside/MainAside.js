import React from "react";
import MenuButton from "../MenuButton/MenuButton";
import User from "../User/User";
import { useSelector } from "react-redux";

const MainAside = () => {
  // всі юзери
  const users = useSelector((state) => state.userReducer.users.data);

  return (
    <>
      <MenuButton />
      <h1>World</h1>

      {/*Перехід на конкретного юзера, заглушка*/}
      {users.map((user) => (
        <User
          key={user.id}
          avatar={user.img}
          name={user.name}
          postsUserId={user.id} // витягуємо по ід, всі пости юзера
        />
      ))}
    </>
  );
};

export default MainAside;
