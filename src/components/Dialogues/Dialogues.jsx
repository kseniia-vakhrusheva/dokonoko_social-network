import React from "react";
import s from "./Dialogues.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";

const Dialogues = (props) => {

    let state = props.dialoguesPage;

  let dialoguesElements = state.dialogues.map(d => (
    <DialogueItem name={d.name} key={d.id} id={d.id} photo={d.photo} />
  ));
  let messagesElements = state.messages.map(m => (
    <Message message={m.messageText} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

let onSendMessageClick = () => {
    props.sendMessage();
}

let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);    
}

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>{dialoguesElements}</div>
      <div className={s.messages}>
        <div>{messagesElements} </div>
        <div>
            <div>
                <textarea value={newMessageBody}
                onChange={onNewMessageChange} 
                placeholder="Enter your message" />
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Dialogues;
