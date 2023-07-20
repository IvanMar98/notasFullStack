import '../assets/styles/notes.css'
function Notes(props){
    const {title, body} = props;
    return(
        <div className="note">
            <h1 className="note-title">{title}</h1>
            <div className="note-body">
                {body}
            </div>
        </div>
    )
}

export default Notes;