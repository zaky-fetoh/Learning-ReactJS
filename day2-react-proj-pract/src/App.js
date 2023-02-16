import AddAge from "./component/AddAge";
import ShowsInfo from "./component/ShowsInfo";
import react from 'react';

let db = [
  {name: "adsASD", age:"23"},
  {name: "adsASD", age:"23"},
  {name: "adsASD", age:"23"},
]; 



function App() {  
  const [DB, setDB] = react.useState([])

  return (
    <div>
      <AddAge insertNewElement={setDB}/>
      <ShowsInfo entries={DB} />      
    </div>
  );
}

export default App;
