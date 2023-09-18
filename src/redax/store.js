import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, How are you?", likeCounts: 15 },
        { id: 2, message: "It's my first message", likeCounts: 20 },
      ],
      newPostText: "it-kamasutra",
    },
    messagesPage: {
      abonentData: [
        {
          isFriend: false,
          id: 1,
          name: "Dimych",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVDEKxJUaZwFXdHwZ2HHH_r-QI_wEzQGiUQ&usqp=CAU",
        },
        {
          isFriend: true,
          id: 2,
          name: "Andrey",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2izzv6dQ2bq2rPgjzdKDNN3yfVx-YDvaOA&usqp=CAU",
        },
        {
          isFriend: true,
          id: 3,
          name: "Sveta",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47ASN-MW8K-nV9Ck_UZmUFmPF-vRavR5zOA&usqp=CAU",
        },
        {
          isFriend: false,
          id: 4,
          name: "Sasha",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdqPun8pQv5NsxtjeV2ZTDGQy-nkGuTXL3g&usqp=CAU",
        },
        {
          isFriend: false,
          id: 5,
          name: "Victor",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&usqp=CAU",
        },
        {
          isFriend: true,
          id: 6,
          name: "Valera",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnK1ckF5OFYR6pitgRrtN5eshysmmFGatQCwyvK078NhOW8yrTMOnMQmXvYoeYM1t4CQ&usqp=CAU",
        },
      ],
      messagesData: [
        { fromDim: true, id: 1, message: "Hi" },
        { fromDim: false, id: 2, message: "How are you, Dimych?" },
        { fromDim: true, id: 3, message: "How its going?" },
      ],
      newMsgText: "lets message",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.messagesPage = dialogsReduser(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
