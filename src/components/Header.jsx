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

    const addNote = (e) => {
        if (newNote.title && newNote.body) {
          e.preventDefault()
          setVisible(!visible) 
          dispatch({type: 'ADD_NOTE', payload: newNote})
          setNewNote({id: Date.now(), title: '', body: ''})
        }
      }

    return(
        <header className='Header'>
        <ModalWindow visible={visible} setVisible={setVisible}>
          <form name="newNote" className='NewNote' onSubmit={addNote}>
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
                className='SubmitButton'>
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
        <h2>Note App by VagSer</h2>
        <button
          className='SubmitButton'
          onClick={() => setVisible(!visible)}
        >Добавить заметку</button>
      </header>
    )
}