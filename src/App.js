import {useDispatch, useSelector} from 'react-redux';
import NoteList from './components/NoteList';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch()
  const allNotes = useSelector(state => state.allNotes)

  return (
    <div>
      <Header />
      <NoteList notes={allNotes}/>
    </div>
  );
}

export default App;
