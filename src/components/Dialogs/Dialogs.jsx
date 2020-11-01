import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={`${s.item} ${s.active}`}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>
      {props.message}
    </div>
  )
}


const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name="Aleksey" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Egor" id="3" />
        <DialogItem name="Svetlana" id="4" />
        <DialogItem name="Alena" id="5" />
        <DialogItem name="Aleksandr" id="6" />
      </div>
      <div className={s.dialogs_message}>
        <Message message="What is your name"/>
        <Message message="Hi"/>
        <Message message="Yeeeaaahh"/>
      </div>
    </div>
  )
}


export default Dialogs;