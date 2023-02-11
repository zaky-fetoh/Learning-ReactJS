import "./Card.css"

function Card(props){
    console.log(props.children)
    return(
        <dev className="container">
            {props.children}
        </dev>
    )
}

export default Card