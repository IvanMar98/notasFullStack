import Notes from "./Notes";
import '../assets/styles/containerNotes.css'

function ContainerNotes({notes}){
    return(
        <div className= {notes.length === 0? 'container-empty': "container-notes"}>
            {notes.length === 0? <p>No existen notas hasta el momento</p>
            : notes.map(note => 
                <Notes 
                key={note.id}
                date={note.date}
                content={note.content}
                important = {note.important}
                ></Notes>
            )}
        </div>
    )
}

export default ContainerNotes;