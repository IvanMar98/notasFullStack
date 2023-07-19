import '../assets/styles/nav.css'
function Nav({addNewNote}){
    return(
        <div className="nav">
            <ul>
                <li><button>Menu</button></li>
                <li><button onClick={addNewNote}>Agregar nueva nota</button></li>
                <li><button>Buscar</button></li>
            </ul>
        </div>
    )
}

export default Nav;