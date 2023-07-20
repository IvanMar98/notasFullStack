import Notes from "./Notes";
import '../assets/styles/containerNotes.css'

function ContainerNotes({notes}){
    return(
        <div className= {notes.length === 0? 'container-empty': "container-notes"}>
            {notes.length === 0? <p>No existen notas hasta el momento</p>
            : notes.map(note => 
                <Notes 
                key={note.id}
                title={note.title}
                body={note.body}
                ></Notes>
            )}
        </div>
    )
}

export default ContainerNotes;