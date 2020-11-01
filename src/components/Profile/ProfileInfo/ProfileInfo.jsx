import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  return (
    <div className={s.profile_info}>
      <div className={s.user_header}>
        <img src="http://www.animedistrada.it/wp-content/uploads/2018/01/copertina-press-area-1.png" alt=""/>
      </div>
      <div className={s.user}>
        <img src="https://photopict.ru/wp-content/uploads/2019/05/krutye-kartinki-na-avu3.jpg" alt=""/>
        <span className={s.user_name}>Aleksey Popov</span>
      </div>
    </div>

  )
}

export default ProfileInfo;