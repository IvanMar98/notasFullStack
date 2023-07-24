import '../assets/styles/subtitle.css'

function Subtitle(props){
    const {subtitle} = props;
    return(
        <div>
            <h3 className="subtitle">
                {subtitle}
            </h3>
        </div>
    )
}

export default Subtitle;