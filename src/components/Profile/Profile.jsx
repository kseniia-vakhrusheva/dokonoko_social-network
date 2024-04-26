import React from "react";
import s from "./Profile.module.css";
import './My_posts/Post/Post'
import MyPosts from "./My_posts/My_posts"

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://www.tallahassee.com/gcdn/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp"></img>
      </div>
      <div>
        <img src="https://imglicensing.com/img_thumbnail_1x1.png"></img>
        diskr
      </div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
