import React from "react";
import s from "./Header.module.css";
import image from "../../image/logo_name.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={image} alt="logo"></img>
      <button className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </button>
    </header>
  );
};

export default Header;
