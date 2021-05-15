import React from 'react';
import style from './MenuItems.module.scss'
import {Link,useHistory} from "react-router-dom";


const MenuItems = ({ active }) => {
  const history = useHistory();

  const exitHandler = () =>{
    history.push('/');

    console.log('Exit')
  };
  const createHandler = () =>{
    console.log('createHandler')
  };
  return (
    <div className={active ? `${style.active} ${style.menu}`: style["menu"]}>
      <div className={style.menuContent}>
        <ul>
            <li className={style.menuElement} onClick={exitHandler}>
               <Link to='/'>Вихід</Link>
             </li>
             <li className={style.menuElement} onClick={createHandler}>
                <Link to='/'>Створити пост</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;