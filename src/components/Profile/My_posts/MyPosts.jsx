import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount:'5'},
        {id: 2, message: "It's my first post", likesCount:'6'},
    ]

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)
    
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MyPosts;
