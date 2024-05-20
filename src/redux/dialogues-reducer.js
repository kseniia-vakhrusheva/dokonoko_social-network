const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogues: [
    {
      id: 1,
      name: "Mike",
      photo:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fotor.com%2Fru%2Ffeatures%2Fone-tap-enhance.html&psig=AOvVaw3Dr44GSxCaAuVVnQTDhjvO&ust=1715013892582000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjQzt769oUDFQAAAAAdAAAAABAE",
    },
    {
      id: 2,
      name: "Lina",
      photo:
        "https://play-lh.googleusercontent.com/a018MxY7Wc8PrvaWGlZHGcAo27NzU__aE29b2NgnWC2hKA9nXe_YsQvj0sJA2kgs4hE",
    },
    {
      id: 3,
      name: "Olga",
      photo:
        "https://images.media.io/images2023/photo-enhance/banner-after.pngs",
    },
  ],
  messages: [
    { id: 1, messageText: "Hi" },
    { id: 2, messageText: "Hello" },
    { id: 3, messageText: "Ok" },
  ],
  newMessageBody: [],
};

const dialoguesReducer = (state = initialState, action) => {
  let stateCopy = structuredClone(state);

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }

    case SEND_MESSAGE: {
      let body = stateCopy.newMessageBody;
      stateCopy.newMessageBody = "";
      stateCopy.messages.push({ id: 6, messageText: body });
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialoguesReducer;
