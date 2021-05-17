import React from 'react';
import style from './page404.module.scss'
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";

const Page404 = () => {
  const history = useHistory();
    let isAuth = useSelector((state) => state.userReducer.users.isAuth);

    if(!isAuth){
        return <Redirect push to="/login"/>
    }
    return (
    <div>
          <h2>404. Page not found</h2>
      <p> Перейти на <span onClick={()=>history.push('/')}  className={style.errorPage}>Головну</span> </p>
    </div>
  );
};

export default Page404;
