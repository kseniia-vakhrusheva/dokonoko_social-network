import React from "react";
import "./My_posts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./My_posts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
