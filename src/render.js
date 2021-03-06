import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addPost, changeNewPostText} from "./redux/state";

export let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={changeNewPostText}/>, document.getElementById('root'));

}

