import React from "react";
import s from "./Header.module.css";
import image from '../../image/logo_name.png'

const Header = () => {
  return (
    <header className={s.header}>
      <img src={image} alt="logo"></img>
    </header>
  );
};

export default Header;
