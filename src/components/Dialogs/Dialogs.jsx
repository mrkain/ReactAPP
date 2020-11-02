import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messageElements = props.messages.map(m => <Message message={m.message}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        { dialogsElements }
      </div>
      <div className={s.dialogs_message}>
        { messageElements }
      </div>
    </div>
  )
}


export default Dialogs;