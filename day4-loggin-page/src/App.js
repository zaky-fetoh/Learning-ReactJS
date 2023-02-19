import LoginForm from "./component/LoginForm";
import styles from "./app.module.css"
import { LogginContextProv } from "./store/login-context";

function App() {
  return (<LogginContextProv>
    <div className={styles.FormStyle}>
      <LoginForm />
    </div></LogginContextProv>
  );
}

export default App;
