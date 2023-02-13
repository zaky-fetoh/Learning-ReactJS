import "./component/Card.css"
import Card from "./component/Card"
import Post from "./component/Post"
const posts =[
  {Header:"HelloWorld1",Content:"LaHsadNAMes"},
  {Header:"HelloWorld3",Content:"LaHsaMarydas"},
  {Header:"HelloWorld4",Content:"LaHsadmAhmosd asdas"},
]


function App() {
  return (
    <Card>
    {posts.map(e=><Post postHeader={e.Header} postBody={e.Content} />)}
    </Card>
  );
}

export default App;
