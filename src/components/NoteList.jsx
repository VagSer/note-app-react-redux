import {useSelector} from 'react-redux';
import React from 'react';
import NoteItem from "./NoteItem";
import '../style/NoteList.css'
import {CSSTransition,TransitionGroup} from 'react-transition-group';

export default function NoteList() {
    const allNotes = useSelector(state => state.allNotes)

    return(
        <TransitionGroup>
            {allNotes.map(note => 
            <CSSTransition
                key={note.id}
                timeout={400}
                classNames='NoteItem'    
            >
                <NoteItem key={note.id} note={note}/>
            </CSSTransition>
            )}
        </TransitionGroup>
    )
}

