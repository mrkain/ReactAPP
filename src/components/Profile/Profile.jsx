import React from "react";
import "./Profile.css"

const Profile = () => {
  return (
      <div className="content">
        <div className="user-header">
        </div>
        <div className="user">
          <img src="https://photopict.ru/wp-content/uploads/2019/05/krutye-kartinki-na-avu3.jpg" alt=""/>
          <span>Aleksey Popov</span>
        </div>
        <div className="posts">
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