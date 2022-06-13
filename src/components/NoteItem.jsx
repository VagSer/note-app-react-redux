import {useDispatch} from 'react-redux';
import {useState} from 'react';
import '../style/NoteItem.css'

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
                <input
                    className='NoteItem__Title'
                    disabled={!editable}
                    value={edit.title}
                    onChange={(e) => setEdit({...edit, title: e.target.value})}
                />
                <div
                    style={editable ? {display: 'none'} : {display: 'inline'}}
                >
                    <button
                    onClick={editNote}
                    >
                        Редактировать
                    </button>
                    <button
                    onClick={removeNote}
                    >
                        Удалить
                    </button>
                </div>
                <div
                    style={!editable ? {display: 'none'} : {display: 'inline'}}
                >
                    <button
                    onClick={acceptEdits}
                    >
                        Принять
                    </button>
                    <button
                    onClick={cancelEdits}
                    >
                        Отменить
                    </button>
                </div>
            </header>
            <hr/>
            <textarea
                className='NoteItem__Body'
                rows={6}
                disabled={!editable}
                value={edit.body}
                onChange={(e) => setEdit({...edit, body: e.target.value})}
            />
        </div>
    )
}