import AddAge from "./component/AddAge";
import ShowsInfo from "./component/ShowsInfo";

let db = []; 


function App() {
  return (
    <div>
      <AddAge />
      <ShowsInfo entries={db} />      
    </div>
  );
}

export default App;
