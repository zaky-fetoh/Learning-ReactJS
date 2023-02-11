import "./Card.css"

function Card(props){
    console.log(props.children)
    return(
        <h3 className="container">
            {props.children}
        </h3>
    )
}

export default Card