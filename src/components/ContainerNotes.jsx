import Notes from "./Notes";
import '../assets/styles/containerNotes.css'

function ContainerNotes(props){
    const notes = props.notes;
    return(
        <div className="container-notes">
        {notes.map(note => 
            <Notes 
            key={note.id}
            title={note.title}
            fecha={note.fecha}
            note={note.note}
            ></Notes>
        )}
        </div>
    )
}

export default ContainerNotes;