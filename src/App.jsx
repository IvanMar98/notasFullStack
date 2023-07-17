import './App.css';
import TitleSection from './components/TitleSection';
import Nav from './components/Nav';
import ContainerNotes from './components/ContainerNotes';

function App() {
  const notes= [
    {
      id: 'note1',
      title: 'Compras',
      note: 'Comprar leche',
      fecha: '13-08-2023'
    },
    {
      id: 'note2',
      title: 'Compras',
      note: 'Comprar leche',
      fecha: '13-08-2023'
    },
    {
      id: 'note3',
      title: 'Compras',
      note: 'Comprar leche',
      fecha: '13-08-2023'
    },
    {
      id:'note4',
      title: 'Ir a casa',
      note: 'Irme a mi casa alas 11 de la noche',
      fecha: '16-07-2023'
    }
  ]

  return (
    <div>
      <TitleSection></TitleSection>
      <Nav></Nav>
      <ContainerNotes notes={notes}></ContainerNotes>
    </div>
  )
}

export default App
