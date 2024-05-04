import React from "react";
import s from "./Dialogues.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const DialogueItem = (props) => {
    let path = "/dialogues/"+ props.id;
    return <div className={s.dialogue + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
   </div>
}

const MessageItem = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogues = (props) => {

 let dialogues = [
    {id: 1, name: 'Mike'},
    {id: 2, name: 'Lina'},
    {id: 3, name: 'Olga'},
 ]
 
 let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Ok'},
 ]

 let dialoguesElements = dialogues.map( d => <DialogueItem name={d.name} id={d.id} />);

 let messagesElements = messages.map( m => <MessageItem message={m.message} id={m.id} />);

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>
        {dialoguesElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogues;
