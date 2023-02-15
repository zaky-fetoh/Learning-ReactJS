import "./FeedNews.css"

function Wall(props){
    return (<div className="wall">
        {props.children}
    </div>);
}


export default Wall