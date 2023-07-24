import './App.css';
import { useState, useEffect } from 'react';
import TitleSection from './components/TitleSection';
import Nav from './components/Nav';
import ContainerNotes from './components/ContainerNotes';
import FormNewNote from './components/FormNewNote';
import { getAllNotes } from './services/notes/getAllNotes';
import { postNewNote } from './services/notes/postNote';

function App() {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {

      // con fetch
      /* fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          setNotes(json)
          setLoading(false);
        }) */
      
      //con axios
      getAllNotes()
        .then((notes) => {
        setNotes(notes);
        setLoading(false);
      })
    }, 3000)
  }, []);

  const showFormNewNote = () => {
      setShowForm(true);
  };

  const addNewNote = (event)=> {
    event.preventDefault();
    const saveNewNote = {
      "userId": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": newNote
    }
    // hacer un post en la api con axios
    postNewNote(saveNewNote)
      .then((noteNew) => {
        setNotes([noteNew, ...notes]);
    })
      setShowForm(false);
      setNewNote('')
  }

  const writingNote = (event) => {
    setNewNote(event.target.value);
  }
  return (
    <div className='app'>
      <TitleSection totalNotes = {notes.length}></TitleSection>
      <Nav newNote={showFormNewNote}></Nav>
      {showForm? <FormNewNote addNewNote={addNewNote} inputNote={writingNote} value={newNote}></FormNewNote>: null}
      <ContainerNotes notes={notes}></ContainerNotes>
      {loading? <p>Wait a minute, loanding . . . </p>: ''}
      
    </div>
  )
}

export default App
