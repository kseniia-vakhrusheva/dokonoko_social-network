import React from "react";
import "./My_posts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./My_posts/MyPosts";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
