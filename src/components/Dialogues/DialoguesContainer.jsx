import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {

      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};
const DialoguesContainer = connect (
  mapStateToProps,
  mapDispatchToProps
) (Dialogues);

export default DialoguesContainer;
