import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src='https://www.dokonoko.jp/static/images/en/main02_sp.png' alt="logo"></img>
    </header>
  );
};

export default Header;
