let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: "5" },
      { id: 2, message: "It's my first post", likesCount: "6" },
    ],

  },
  dialoguesPage: {
    dialogues: [
        { id: 1, name: "Mike" },
        { id: 2, name: "Lina" },
        { id: 3, name: "Olga" },
      ],
    messages: [
      { id: 1, messageText: "Hi" },
      { id: 2, messageText: "Hello" },
      { id: 3, messageText: "Ok" },
    ],
  },
};

export default state;
