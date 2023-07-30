import '../assets/styles/formNewNote.css'
function FormNewNote({addNewNote, inputNote, value, important, handleImportant}){
    return (
        <div className="container-input-new-note">
            <form onSubmit={addNewNote}>
                <input id='inputText' type="text" onChange={inputNote} value={value}/>
                <label>Importante</label>
                <input type="checkbox" name="impotant" id="important" checked={important} onChange={handleImportant}/>
                <button>Create Note</button>
            </form>
        </div>
    )
}

export default FormNewNote;