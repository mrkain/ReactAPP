import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPostText('');
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <h3>
        MY POSTS
      </h3>
      <div className={s.new_post}>
        <span className={s.post_title}>Новый пост</span>
        <textarea className={s.post_text} ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        <button className={s.post_button} onClick={addPost}>Add Post</button>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;