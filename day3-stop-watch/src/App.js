import Control from "./component/control"
import Watch from "./component/watch"
import react from "react"


function App() {
  const [startTime, setStart] = react.useState(Date.now())
  const [state, setState] = react.useState(false)
  const [showTime, setShowTime] = react.useState("")

  react.useEffect(()=>{
    if(!state) return
    const InterTimer = setInterval(()=>{
      setShowTime((Date.now() - startTime).toString())
    }, 100)
    return ()=>{if(state)clearInterval(InterTimer)}
  },[state])

  const Click =()=>{
    if(state) setStart(Date.now())
    setState(pre=>!pre)
  }

  return (
    <div>
      <Watch time={state && showTime || ""}/>
      <Control 
      startClick={Click}
      name={!state && "start" ||"stop"}/>
    </div>
  );
}

export default App;
