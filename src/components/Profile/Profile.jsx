import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
  return (
      <div className={s.content}>
        <div className={s.user_header}>
        </div>
        <div className={s.user}>
          <img src="https://photopict.ru/wp-content/uploads/2019/05/krutye-kartinki-na-avu3.jpg" alt=""/>
          <span>Aleksey Popov</span>
        </div>
        <div className={s.posts}>
          MY POSTS
          <div>
            New Post
          </div>
          <div>
            <div>
              Post1
            </div>
            <div>
              Post2
            </div>
          </div>
        </div>
      </div>
  )
}

export default Profile;