import React from "react";
import styles from "./Main.module.scss";
import Posts from "../../components/Posts/Posts";
import {like, logo} from "../../assets/svg";
import User from "../../components/User/User";
import { useSelector} from "react-redux";

const posts = [
  {
    id: 1,
    avatar: "../../assets/img/post1/avatar.png",
    name: "karambol_first",
    picture: "",
    likes: 125,
    comments: {
      vasya: "test",
      vasya2: "test2",
    },
  },
  {
    id: 2,
    avatar: "../../assets/img/post1/avatar.png",
    name: "karambol_second",
    picture: "",
    likes: 125,
    comments: {
      vasya: "test",
      vasya2: "test2",
    },
  },
];

const Main = () => {
  // всі юзери
  const users = useSelector(state => state.userReducer.users.data);

  return (
    <div className={styles.container}>
      <div>
        <Posts posts={posts}/>
      </div>
      <aside>
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


      </aside>
    </div>
  );
};

export default Main;
