import {rerenderEntireTree} from "../render";

let state = {

  profilePage: {
    posts: [
      {id: 1, message: 'Hi how are You?', likesCount: 11},
      {id: 2, message: 'Its my first post', likesCount: 3},
      {id: 3, message: 'So long', likesCount: 5},
      {id: 4, message: 'For you my girl', likesCount: 77}
    ],
    newPostText: 'во во во во во'
  },

  dialogsPage: {
    messages: [
      {id: 1, message: 'Hi, what is your name ?'},
      {id: 2, message: 'Just perfect'},
      {id: 3, message: 'I like it so much'}
    ],
    dialogs: [
      {id: 1, name: 'Aleksey', avatar: 'https://photopict.ru/wp-content/uploads/2019/05/krutye-kartinki-na-avu3.jpg'},
      {id: 2, name: 'Andrey', avatar: 'https://photopict.ru/wp-content/uploads/2019/05/krutye-kartinki-na-avu3.jpg'},
      {id: 3, name: 'Egor', avatar: 'https://photopict.ru/wp-content/uploads/2019/05/krutye-kartinki-na-avu3.jpg'},
      {id: 4, name: 'Svetlana', avatar: 'https://photopict.ru/wp-content/uploads/2019/05/krutye-kartinki-na-avu3.jpg'},
      {id: 5, name: 'Alena', avatar: 'https://photopict.ru/wp-content/uploads/2019/05/krutye-kartinki-na-avu3.jpg'},
      {id: 6, name: 'Aleksandr', avatar: 'https://photopict.ru/wp-content/uploads/2019/05/krutye-kartinki-na-avu3.jpg'},
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export let changeNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;

