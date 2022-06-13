import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import NoteList from './components/NoteList';

function App() {
  const [newNote, setNewNote] = useState(
    {id: Date.now(), title: '', body: ''}
  )

  const dispatch = useDispatch()
  const allNotes = useSelector(state => state.allNotes)

  const addNote = () => {
    if (newNote.title && newNote.body) {
      dispatch({type: 'ADD_NOTE', payload: newNote})
      setNewNote({id: Date.now(), title: '', body: ''})
    }
  }

  return (
    <div>
      <header>
        <h3>Приложение для заметок</h3>
        <input
          type="text"
          value={newNote.title}
          onChange={(e) => setNewNote({...newNote, title: e.target.value})}
          placeholder='Название заметки'
        />
        <textarea
          type="text"
          value={newNote.body}
          onChange={(e) => setNewNote({...newNote, body: e.target.value})}
          placeholder='Текст заметки'
          style={{resize: 'none'}}
        />
        <button onClick={addNote}>
        Добавить заметку
        </button>
      </header>
      <hr/>
    <NoteList notes={allNotes}/>
    </div>
  );
}

export default App;
