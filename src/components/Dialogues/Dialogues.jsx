import React from "react";
import s from "./Dialogues.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";

const Dialogues = (props) => {

 let dialogues = [
    {id: 1, name: 'Mike'},
    {id: 2, name: 'Lina'},
    {id: 3, name: 'Olga'},
 ]
 
 let messages = [
    {id: 1, messageText: 'Hi'},
    {id: 2, messageText: 'Hello'},
    {id: 3, messageText: 'Ok'},
 ]

 let dialoguesElements = dialogues.map( d => <DialogueItem name={d.name} id={d.id} />);

 let messagesElements = messages.map( m => <Message message={m.messageText} id={m.id} />);

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
