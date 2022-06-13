import {useDispatch} from 'react-redux';
import {useState} from 'react';
import '../style/NoteItem.css'
import '../style/buttons.css'

export default function NoteItem(props) {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState({
        ...props.note
    })

    const [editable, setEditable] = useState(false)

    const removeNote = () => {
        dispatch({type: 'REMOVE_NOTE', payload: props.note.id})
    }

    const editNote = () => {
        setEditable(!editable)
    }

    const acceptEdits = () => {
        setEditable(!editable)
        dispatch({type: 'EDIT_NOTE', payload: edit})
    }

    const cancelEdits = () => {
        setEditable(!editable)
        setEdit({...props.note})
    }

    return(
        <div className='NoteItem'>
            <header>
                {editable? 
                <input
                    className='NoteItem__Title'
                    value={edit.title}
                    onChange={(e) => setEdit({...edit, title: e.target.value})}
                />
                :  
                <h3 style={{display: 'inline', margin: '0'}}>{props.note.title}</h3>
                }
                <div
                    style={editable ? {display: 'none'} : {display: 'inline'}}
                >
                    <button
                    className='EditButton'
                    onClick={editNote}
                    >
                        Редактировать
                    </button>
                    <button
                    className='DeleteButton'
                    onClick={removeNote}
                    >
                        Удалить
                    </button>
                </div>
                <div
                    style={!editable ? {display: 'none'} : {display: 'inline'}}
                >
                    <button
                    className='SubmitButton'
                    onClick={acceptEdits}
                    >
                        Принять
                    </button>
                    <button
                    className='DeleteButton'
                    onClick={cancelEdits}
                    >
                        Отменить
                    </button>
                </div>
            </header>
            <hr/>
            {editable? 
                <textarea
                required
                className='NoteItem__Body'
                disabled={!editable}
                value={edit.body}
                onChange={(e) => setEdit({...edit, body: e.target.value})}
                />
                :  
                <p>{props.note.body}</p>
                }
            
        </div>
    )
}