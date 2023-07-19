import './App.css';
import { useState } from 'react';
import TitleSection from './components/TitleSection';
import Nav from './components/Nav';
import ContainerNotes from './components/ContainerNotes';

function App() {
  const [notes, setNotes] = useState([]);

  const handleClickNewNote = ()=> {
    setNotes([ {
      id: 'note2',
      title: 'Conocimiento',
      note: 'Aprender REact',
      fecha: '13-08-2023'
    }, ...notes])
  };
  return (
    <div className='app'>
      <TitleSection totalNotes = {notes.length}></TitleSection>
      <Nav addNewNote={handleClickNewNote}></Nav>
      <ContainerNotes notes={notes}></ContainerNotes>
    </div>
  )
}

export default App
