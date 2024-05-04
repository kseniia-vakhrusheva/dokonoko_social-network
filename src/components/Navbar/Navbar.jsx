import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import ProfileIcon from "../../image/profile.svg";
import MessageIcon from "../../image/message.svg";
import NewsIcon from "../../image/news.svg";
import MusicIcon from "../../image/music.svg";
import SettingsIcon from "../../image/settings.svg";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          <img src={ProfileIcon} className={s.icon}></img>
          <span>Profile</span>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogues" activeClassName={s.active}>
          <img src={MessageIcon} className={s.icon}></img>
          <span>Messages</span>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          <img src={NewsIcon} className={s.icon}></img>
          <span>News</span>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          <img src={MusicIcon} className={s.icon}></img>
          <span>Music</span>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="settings" activeClassName={s.active}>
          <img src={SettingsIcon} className={s.icon}></img>
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
