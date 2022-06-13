import {useDispatch} from 'react-redux';
import { useState } from 'react';
import '../style/Header.css';
import '../style/buttons.css';
import ModalWindow from './ModalWindow';

export default function Header() {
    const [newNote, setNewNote] = useState(
        {id: Date.now(), title: '', body: ''}
      )
    const [visible, setVisible] = useState(false)

    const dispatch = useDispatch()

    const addNote = () => {
        if (newNote.title && newNote.body) {
          setVisible(!visible) 
          dispatch({type: 'ADD_NOTE', payload: newNote})
          setNewNote({id: Date.now(), title: '', body: ''})
        }
      }

    return(
        <header className='Header'>
        <ModalWindow visible={visible} setVisible={setVisible}>
          <form className='NewNote'>
            <input
              type="text"
              required
              value={newNote.title}
              onChange={(e) => setNewNote({...newNote, title: e.target.value})}
              placeholder='Название заметки'
            />
            <textarea
              type="text"
              required
              value={newNote.body}
              onChange={(e) => setNewNote({...newNote, body: e.target.value})}
              placeholder='Текст заметки'
              style={{resize: 'none'}}
            />
            <div>
              <button 
                type='submit'
                className='SubmitButton'
                onClick={addNote}>
                  Добавить
                </button>
                <button 
                className='DeleteButton'
                onClick={() => setVisible(!visible)}>
                  Отменить
                </button>
            </div>
          </form>
        </ModalWindow>
        <h3>Приложение для заметок</h3>
        <button
          className='SubmitButton'
          onClick={() => setVisible(!visible)}
        >Добавить заметку</button>
      </header>
    )
}