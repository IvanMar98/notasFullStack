import Title from "./Title";
import Subtitle from "./Subtitle";
import '../assets/styles/titleSection.css'

function TitleSection({title, totalNotes}){
    return(
        <div className="title-section">
            <Title title={title}></Title>
            <Subtitle subtitle = {'Total de notas '+ totalNotes}></Subtitle>
        </div>
    )
}

export default TitleSection