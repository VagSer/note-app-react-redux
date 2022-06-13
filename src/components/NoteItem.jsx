
export default function NoteItem(props) {
    return(
        <div>
            <h3>{props.note.title}</h3>
            <p>{props.note.body}</p>
        </div>
    )
}