let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "5" },
        { id: 2, message: "It's my first post", likesCount: "6" },
      ],
      newPostText: "",
    },
    dialoguesPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
