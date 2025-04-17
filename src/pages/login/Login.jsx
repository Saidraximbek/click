import React from "react";
import style from "./Login.module.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={style.loginContainer}>
      <div className={style.finance}>
        <img src="./images/logo-large.svg" alt="" />
      </div>
      <img
        src="./images/Sidebar.png"
        alt="avatar"
        className={style.loginHeroImg}
      />

      <div className={style.loginInputs}>
        <h2 className={style.loginTitle}>Login</h2>
        <div className={style.loginInp}>
          <div className={style.loginInpStyle}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={style.loginInpStyle}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
        </div>

        <button className={style.loginBtn}>Login</button>

        <div className={style.loginToNext}>
          <p>Need to create an account?</p>
          <Link to='/register'>
           <a href="">Sign Up</a>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
