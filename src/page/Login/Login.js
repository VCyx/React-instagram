import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../routes/Arrow";
import Button from "../../components/Button/Button";
import InputOl from "../../components/Input/InputOl";
import style from "../../components/Input/Input.module.scss";
import "../Login/Login.module.scss";
import styles from "./Login.module.scss";
import Icon from "../../components/Icon/Icon";
import { login, registration } from "../../api/verificationAPI";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../@redux/users/action";

const Login = () => {
  const positionLink = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = positionLink.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const ecTrance = async () => {
    try {
      let auUser;
      if (isLogin) {
        auUser = await login(email, password);
        dispatch(setUserLogin(auUser));
      } else {
        auUser = await registration(email, password, nickname);
        dispatch(setUserLogin(auUser));
        history.push(LOGIN_ROUTE);
      }
      history.push(MAIN_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const updateEmail = (value) => {
    setEmail(value);
  };
  const updatePassword = (value) => {
    setPassword(value);
  };
  const updateNickname = (value) => {
    setNickname(value);
  };

  return (
    <div className={styles.authContainer}>
      <div>
        <div>
          <Icon className={styles.authLogo} type="logo" />
          <h2 className={styles.authTitle}>
            {isLogin ? "Авторизація" : "Реєстрація"}
          </h2>
          <InputOl
            itype={"email"}
            placeholter={"Ваша електронна адреса..."}
            styles={style.autIpn}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            updateData={updateEmail}
          />
          {isLogin ? (
            ""
          ) : (
            <InputOl
              itype={"text"}
              placeholter={"Ваш псевдонім в forreal..."}
              styles={style.autIpn}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              updateData={updateNickname}
            />
          )}
          <InputOl
            itype={"password"}
            placeholter={"Ваш пароль..."}
            styles={style.autIpn}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            updateData={updatePassword}
          />

          <div className={styles.authBox}>
            {isLogin ? (
              <div className={styles.authPreLink}>
                може{" "}
                <NavLink className={styles.authLink} to={REGISTRATION_ROUTE}>
                  зареєструйся?
                </NavLink>
              </div>
            ) : (
              <div className={styles.authPreLink}>
                чи в тебе{" "}
                <NavLink className={styles.authLink} to={LOGIN_ROUTE}>
                  є профіль ?
                </NavLink>
              </div>
            )}
            {isLogin ? (
              <Button onClick={ecTrance} auth />
            ) : (
              <Button onClick={ecTrance} regist />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
