import React from "react";
import styles from "./Main.module.scss";
import Posts from "../../components/Posts/Posts";
import User from "../../components/User/User";
import { useSelector } from "react-redux";

const Main = () => {
  // всі юзери
  const users = useSelector((state) => state.userReducer.users.data);
  const posts = useSelector((state) => state.postsReducer.posts);
  console.log("posts", posts);

  return (
    <div className={styles.container}>
      <div>
        <Posts posts={posts} />
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
