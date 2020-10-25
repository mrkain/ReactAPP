import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={s.post}>
      <span>{`Пост номер ${props.postNumber}`}</span>
      <div className={s.item}>
        <img src="https://yt3.ggpht.com/a/AATXAJyDytRa1iX2xd3CLMo0H-moBlkNskqv5vqIAnzRsw=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
        { props.message }
      </div>
    </div>
  )
}


export default Post;