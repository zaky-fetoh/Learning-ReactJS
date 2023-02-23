import Login from "../component/Login"
import styles from "./LoggingPage.module.css"


function LogginHeader(props) {
    return <header className={styles.Header}>
        {props.children}
    </header>
}



export default function LoggingPage(props) {

    return <>
        <LogginHeader>
            <h4> Zaky </h4>
        </LogginHeader>
        <div className={styles.LoginPage}>
            <Login />
        </div>
    </>
}