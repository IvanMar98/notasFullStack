import '../assets/styles/notes.css'
function Notes(props){
    const {title, fecha, note} = props;
    return(
        <div className="note">
            <h1 className="note-title">{title}</h1>
            <p className="note-date">{fecha}</p>
            <div className="note-body">
                {note}
            </div>
        </div>
    )
}

export default Notes;