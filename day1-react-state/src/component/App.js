import Wall from "./FeedNews/FeedNews"
import Post from "./FeedNews/Post";
import InputNews from "./AddNews/InputNews"
import react from "react"
import uuid from 'react-uuid';

let posts = [
]
let rendr = undefined;


function delteElement(id) {
  posts = posts.filter(e => e.id !== id);
  console.log(`Post ${id} is delted`);
  rendr(uuid())
}
function updateElement(id, post) {
  console.log(id, post);
  posts.find((e, indx, arr) => {
    if (e.id === id) {
      arr[indx].header = post.header;
      arr[indx].content = post.content;
    }
  })
  rendr(uuid())
}


function App() {
  const [v, s] = react.useState(uuid())
  const [err, setErr] = react.useState("")
  const updateContent = (post) => {
    if (post.content.trim() === "" || post.header.trim() === "") {
      setErr(`can't Be Empty`);
      setTimeout(() => {
        setErr("");
      }, 2000);
      return
    }
    posts.push({ ...post, id: v });
    s(uuid())
  }
  rendr = s
  return (<>
    <h3> {err} </h3>
    <h1 style={{ textAlign: "center" }}>
      Wall of Current Events </h1>
    <InputNews updateContent={updateContent} />
    <Wall>
      {posts.map(e => <Post id={e.id} key={e.id} postOps={{
        update: updateElement, delete: delteElement,
      }}
        header={e.header} content={e.content}
      ></Post>)}
    </Wall></>
  );
}

export default App;
