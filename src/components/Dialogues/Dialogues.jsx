import React from "react";
import s from "./Dialogues.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";

const Dialogues = (props) => {
  let textInsert = React.createRef();
  let sendMessage = () => {
    let text = textInsert.current.value;
    alert(text);
  };

  let dialoguesElements = props.state.dialogues.map((d) => (
    <DialogueItem name={d.name} id={d.id} photo={d.photo} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.messageText} id={m.id} />
  ));

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>{dialoguesElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <textarea ref={textInsert}></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogues;
