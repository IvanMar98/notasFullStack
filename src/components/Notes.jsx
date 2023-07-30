import '../assets/styles/notes.css'
function Notes(props){
    const { date, content, important } = props;
    return(
        <div className="note">
            <h1 className="note-title">{date}</h1>
            <div className="note-body">
                {content}
            </div>
        </div>
    )
}

export default Notes;