import Wall from "./FeedNews/FeedNews"
import Post from "./FeedNews/Post";

const posts =[
  {header:"Header1", content:"content1"},
  {header:"Header2", content:"content2"},
  {header:"Header3", content:"content3"},
  {header:"Header4", content:"content4"},
  {header:"Header5", content:"content5"},
]

function App() {
  return (<div>
    <h1 style={{"text-align":"center"}}>
      Wall of Current Events </h1>
    <Wall>
      {posts.map(e => <Post header={e.header} content={e.content}></Post>)}
    </Wall></div>
  );
}

export default App;
