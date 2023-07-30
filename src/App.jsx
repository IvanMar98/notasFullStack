import './App.css';
import { useState, useEffect } from 'react';
import TitleSection from './components/TitleSection';
import Nav from './components/Nav';
import ContainerNotes from './components/ContainerNotes';
import FormNewNote from './components/FormNewNote';
import { getAllNotes } from './services/notes/getAllNotes';
import { postNewNote } from './services/notes/postNote';
import { getNotesImportant } from './services/notes/getNotesImportant';

function App() {
  const [notes, setNotes] = useState([]);
  const [notesImportants, setNotesImportants] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [important, setImportant] = useState(false);
  const [showNotesImportants, setShowNotesImportants] = useState(false)
  
  useEffect(() => {
    getAllNotes()
      .then((notes) => {
      setNotes(notes);
    })
  }, []);

  const showFormNewNote = (event) => {
    setShowForm((prevValue) => event? !prevValue: '');
  };

  const addNewNote = (event)=> {
    event.preventDefault();
    const saveNewNote = {
      'content': newNote,
      'important': important
    }
    // hacer un post en la api con axios
    postNewNote(saveNewNote)
      .then((noteNew) => {
        setNotes([noteNew, ...notes]);
    })
      setShowForm(false);
      setNewNote('')
      setImportant(false)
  }

  const writingNote = (event) => {
    setNewNote(event.target.value);
  }

  const handleImportant = (event) => {
    setImportant(event.target.checked)
  }

  const handleShowNotesImportants = (event) =>{
    setShowNotesImportants((prevValue) => event? !prevValue: '');
    getNotesImportant()
      .then((notesImportants) => {
        setNotesImportants(notesImportants)
      })
  }
  return (
    <div className='app'>
      <TitleSection  
        title= {showNotesImportants? 'Notas Importantes': 'Todas las Notas'} 
        totalNotes = {showNotesImportants? notesImportants.length:  notes.length}>  
      </TitleSection>
      <Nav 
        title= {showNotesImportants? 'Ver Todas las Notas': 'Ver notas importantes' } 
        newNote={showFormNewNote} 
        handleNotesImportants= {handleShowNotesImportants}>
      </Nav>
      {showForm? 
        <FormNewNote 
          addNewNote={addNewNote} 
          inputNote={writingNote} 
          value={newNote} 
          important={important} 
          handleImportant={handleImportant}>  
        </FormNewNote>: ''
      }
      <ContainerNotes notes={showNotesImportants? notesImportants: notes}></ContainerNotes>
    </div>
  )
}

export default App
