import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      MY POSTS
      <div className={s.new_post}>
        <span className={s.post_title}>Новый пост</span>
        <textarea className={s.post_text}>Введите текст поста</textarea>
        <button className={s.post_button}>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message = 'Hi how are You?' postNumber = '1' likes = '2' />
        <Post message = 'Its my first post' postNumber = '2' likes = '0' />
      </div>
    </div>
  )
}

export default MyPosts;