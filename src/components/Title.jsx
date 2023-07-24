import '../assets/styles/title.css'

function Title(props){
    const {title} = props;
    return (
        <div>
            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Title;