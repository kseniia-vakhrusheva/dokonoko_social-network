import React from "react";
import "./My_posts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import MyPostsContainer from "./My_posts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
};

export default Profile;
