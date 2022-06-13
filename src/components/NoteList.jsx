import NoteItem from "./NoteItem";

export default function NoteList(props) {
    return(
        <div>
            <h3>{props.title}</h3>
            {props.notes.map(note => <NoteItem key={note.id} note={note}/>)}
        </div>
    )
}

