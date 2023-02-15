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
    const editClickHandler = ()=>{
        props.postOps.update(props.id, "post")
    }
    const deleteClickHandler = ()=>{
        props.postOps.delete(props.id)
    }
    return <div className="post">
        <PostHeader> {props.header}</PostHeader>
        <PostContent>{props.content}</PostContent>
        <div style={{textAlign:"center"}}>
            <button onClick={editClickHandler}>Edit</button> 
            <button onClick={deleteClickHandler}>Delete</button>
        </div>
    </div>
}