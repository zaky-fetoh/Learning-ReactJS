import react from "react"
import { LogginContext } from "../store/login-context"

export default function LoggedPage () {
    const context = react.useContext( LogginContext)
    return <div>
      <h1>WellCome</h1>
      <button 
      onClick={context.doLoggout}>Loggout</button>
    </div>
  }