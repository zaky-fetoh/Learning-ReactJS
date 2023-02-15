import "./Post.css"

function PostHeader(props){
    return<h3 className="postHeader">
        {props.children}
    </h3>
}
function PostContent(props){
    return <h5 className="postContent">
        {props.children}
    </h5>
}


export default function(props){
    return <div className="post">
        <PostHeader> {props.header}</PostHeader>
        <PostContent>{props.content}</PostContent>
    </div>
}