import React from "react";
import './My_posts.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className="my_posts">
      <div>my post</div>
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <Post message='Hi, how are you?' likesCount='5'/>
            <Post message="It's my first post" likesCount='10'/>
        </div>
      <div>
      </div>
    </div>
  );
};

export default MyPosts;
