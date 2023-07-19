import '../assets/styles/formNewNote.css'
function FormNewNote({addNewNote, inputNote, value}){
    return (
        <div className="container-input-new-note">
            <form onSubmit={addNewNote}>
                <input type="text" onChange={inputNote} value={value}/>
                <button>Create Note</button>
            </form>
        </div>
    )
}

export default FormNewNote;