import "./component/Card.css"
import Card from "./component/Card"

const posts =[
  "HelloWorld1",
  "Hello World2",
  "Hello World3"
]


function App() {
  return (
    <Card className="card">
    {posts.map(e=><Card>{e}</Card>)}
    </Card>
  );
}

export default App;
