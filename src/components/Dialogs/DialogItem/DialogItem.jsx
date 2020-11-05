import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
      <div className={s.item}>
        <NavLink activeClassName={s.active} to={"/dialogs/" + props.id}> <img className={s.avatar} src={props.avatar} /> <span className={s.name}>{props.name}</span></NavLink>
      </div>
  )
}

export default DialogItem;