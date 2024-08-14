import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";


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

export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogues)



 
