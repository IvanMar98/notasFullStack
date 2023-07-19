import '../assets/styles/nav.css'

function Nav({newNote}){
    return(
        <div className="nav">
            <div>
                <ul>
                    <li><button>Menu</button></li>
                    <li><button onClick={newNote}>Agregar nueva nota</button></li>
                    <li><button>Buscar</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;