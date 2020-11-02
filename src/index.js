import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: 1, name: 'Aleksey'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Egor'},
  {id: 4, name: 'Svetlana'},
  {id: 5, name: 'Alena'},
  {id: 6, name: 'Aleksandr'},
]

let messages = [
  {id: 1, message: 'Hi, what is your name ?'},
  {id: 2, message: 'Just perfect'},
  {id: 3, message: 'I like it so much'}
]

let posts = [
  {id: 1, message: 'Hi how are You?', likesCount: 11},
  {id: 2, message: 'Its my first post', likesCount: 3},
  {id: 3, message: 'So long', likesCount: 5},
  {id: 4, message: 'For you my girl', likesCount: 77}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
