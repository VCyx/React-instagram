import React from 'react';
import style from './page404.module.scss'
import {useHistory} from "react-router-dom";

const Page404 = () => {
  const history = useHistory();
  return (
    <div>
          <h2>404. Page not found</h2>
      <p> Перейти на <span onClick={()=>history.push('/')}  className={style.errorPage}>Головну</span> </p>
    </div>
  );
};

export default Page404;
