import AddAge from "./component/AddAge";
import ShowsInfo from "./component/ShowsInfo";
import react from 'react';
import Dialog from "./component/dialog";

function App() {  
  const [DB, setDB] = react.useState([])
  const [diaDic, setDiaDic] = react.useState({
    show:false, msg: "",
  })
  return (
    <div>
      <AddAge insertNewElement={setDB} showMsg={setDiaDic}/>
      <ShowsInfo entries={DB} />
      <Dialog show={diaDic.show} msg={diaDic.msg} condt={setDiaDic}/>
    </div>
  );
}

export default App;
