import "./Post.css"

function PostHeader(props){
    return (
        <h3 className="postHeader">{props.children}</h3>
    );
}
function PostBody(props){
    return(
        <h4 className="postContent">
            {props.children}
        </h4>
    );
}

function Post(props){
    return(
        <div className="postContainer">
            <PostHeader>{props.postHeader}</PostHeader>
            <PostBody>{props.postBody}</PostBody>
        </div>
    );
}


export default Post