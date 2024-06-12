import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
  return (
    <div>
      <div className={s.pageCover}>
        <img src="https://www.tallahassee.com/gcdn/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp" alt="logo"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="profile"/>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
