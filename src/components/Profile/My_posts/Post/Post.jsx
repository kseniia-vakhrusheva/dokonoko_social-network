import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://harpersbazaar.com.au/wp-content/uploads/2022/02/Best-face-creams.png"></img>
      {props.message}
      <button>Like
        <span> {props.likesCount}</span>
      </button>
    </div>
  );
};

export default Post;
