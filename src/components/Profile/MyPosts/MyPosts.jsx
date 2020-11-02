import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

  return (
    <div>
      <h3>
        MY POSTS
      </h3>
      <div className={s.new_post}>
        <span className={s.post_title}>Новый пост</span>
        <textarea className={s.post_text}>Введите текст поста</textarea>
        <button className={s.post_button}>Add Post</button>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;