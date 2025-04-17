import React from "react";
import style from "./Register.module.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className={style.registerContainer}>
      <div className={style.finance}>
        <img src="./images/logo-large.svg" alt="" />
      </div>
      <img
        src="./images/Sidebar.png"
        alt="avatar"
        className={style.registerHeroImg}
      />

      <div className={style.registerInputs}>
        <h2 className={style.registerTitle}>Sign Up</h2>
        <div className={style.registerInp}>
          <div className={style.registerInpStyle}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={style.registerInpStyle}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={style.registerInpStyle}>
            <label htmlFor="password">Create Password</label>
            <input type="password" name="password" />
            <p>Passwords must be at least 8 characters</p>
          </div>
        </div>

        <button className={style.registerBtn}>Register</button>

        <div className={style.registerToNext}>
          <p>Need to create an account?</p>
          <Link to='/login'>
           <a href="">Login</a>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Register;
