import LoginForm from "./component/LoginForm";
import styles from "./app.module.css"
import { LogginContextProv, LogginContext } from "./store/login-context";
import react from "react"

import LoggedPage from "./component/LogedPage"


const HomePage = () => {
  const ctx = react.useContext(LogginContext)
  return <>
    {ctx.isLoggin && <LoggedPage /> || <div className={styles.FormStyle}>
      <LoginForm /></div>}
  </>
}


function App() {

  return (<LogginContextProv>
    <div className={styles.FormStyle}>
          <HomePage />
    </div></LogginContextProv>
  );
}

export default App;