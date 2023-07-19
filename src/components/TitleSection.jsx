import Title from "./Title";
import Subtitle from "./Subtitle";
import '../assets/styles/titleSection.css'

function TitleSection(props){
    return(
        <div className="title-section">
            <Title title='Todas las notas'></Title>
            <Subtitle subtitle = {'Total de notas '+props.totalNotes}></Subtitle>
        </div>
    )
}

export default TitleSection