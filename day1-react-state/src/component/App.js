import Wall from "./FeedNews/FeedNews"
import Post from "./FeedNews/Post";
import InputNews from "./AddNews/InputNews"
import react from "react"
const posts =[
]

function App() {
  const [v, s] = react.useState("")
  const updateContent = (post)=>{
    posts.push(post);
    console.log(posts[0])
    s(posts.length)
  }

  return (<>
    <h1 style={{textAlign:"center"}}>
      Wall of Current Events </h1>
    <InputNews updateContent={updateContent}/>
    <Wall>
      {posts.map(e => <Post header={e.header} content={e.content}></Post>)}
    </Wall></>
  );
}

export default App;
