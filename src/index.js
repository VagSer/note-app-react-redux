import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const defaultState = {allNotes: [
  {id: 0, title: 'Первая заметка', body: 'Текст первой заметки'},
  {id: 1, title: 'Вторая заметка', body: 'Текст второй заметки'},
]}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {...state, allNotes: [...state.allNotes, action.payload]}
    case "REMOVE_NOTE":
      return {...state, allNotes: state.allNotes.filter(note => note.id !== action.payload)}
    default:
      return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
