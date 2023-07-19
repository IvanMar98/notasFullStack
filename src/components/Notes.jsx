import '../assets/styles/notes.css'
function Notes(props){
    const {title, fecha, note} = props;
    return(
        <div className="note">
            <h1 className="note-title">{title}</h1>
            <small className="note-date">{fecha}</small>
            <div className="note-body">
                {note}
            </div>
        </div>
    )
}

export default Notes;