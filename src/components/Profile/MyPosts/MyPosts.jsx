import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      MY POSTS
      <div className={s.new_post}>
        <textarea>Введите текст поста</textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message = 'Hi how are You?' postNumber = '1' />
        <Post message = 'Its my first post' postNumber = '2' />
      </div>
    </div>
  )
}

export default MyPosts;