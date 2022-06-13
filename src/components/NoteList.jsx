import {useSelector} from 'react-redux';
import NoteItem from "./NoteItem";

export default function NoteList() {
    const allNotes = useSelector(state => state.allNotes)

    return(
        <div>
            {allNotes.map(note => <NoteItem key={note.id} note={note}/>)}
        </div>
    )
}

