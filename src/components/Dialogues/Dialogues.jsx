import React from "react";
import s from "./Dialogues.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const DialogueItem = (props) => {
    let path = "/dialogues/"+ props.id;
    return <div className={s.dialogue + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
   </div>
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogues = (props) => {
  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>
       <DialogueItem name='Mike' id='1' />
       <DialogueItem name='Lina' id='2' />
       <DialogueItem name='Olga' id='3' />
      </div>
      <div className={s.messages}>
        <Message message='Hi'/>
        <Message message='Hi1'/>
        <Message message='Hi2'/>
      </div>
    </div>
  );
};

export default Dialogues;
