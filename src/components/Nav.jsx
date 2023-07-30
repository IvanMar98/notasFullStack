import '../assets/styles/nav.css'

function Nav({ title, newNote, handleNotesImportants}){
    return(
        <div className="nav">
            <div>
                <ul>
                    <li><button onClick={newNote} className='btn-nav'>Agregar nueva nota</button></li>
                    <li  onClick={handleNotesImportants}><button className='btn-nav'>{title}</button></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;