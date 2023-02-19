import LoginForm from "./component/LoginForm";
import styles from "./app.module.css"
import react from "react"
import { LogginContextProv, LogginContext } from "./store/login-context";

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
    <HomePage />
  </LogginContextProv>
  );
}

export default App;