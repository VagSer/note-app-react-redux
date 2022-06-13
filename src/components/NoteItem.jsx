import {useDispatch, useSelector} from 'react-redux';

export default function NoteItem(props) {
    const dispatch = useDispatch()
    const allNotes = useSelector(state => state.allNotes)

    const removeNote = () => {
        dispatch({type: 'REMOVE_NOTE', payload: props.note.id})
    }

    return(
        <div>
            <h3>{props.note.title}</h3>
            <p>{props.note.body}</p>
            <button
                onClick={removeNote}
            >
                Удалить заметку
            </button>
        </div>
    )
}