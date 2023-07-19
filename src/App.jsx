import './App.css';
import { useState } from 'react';
import TitleSection from './components/TitleSection';
import Nav from './components/Nav';
import ContainerNotes from './components/ContainerNotes';
import FormNewNote from './components/FormNewNote';

function App() {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newNote, setNewNote] = useState("")
  
  const showFormNewNote = () => {
      setShowForm(true);
  };

  const addNewNote = (event)=> {
    event.preventDefault();
    const saveNewNote = {
      id: notes.length+1,
      title: 'New Note',
      fecha: new Date().toISOString(),
      note: newNote
    }
    setNotes([saveNewNote, ...notes]);
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
      
    </div>
  )
}

export default App
