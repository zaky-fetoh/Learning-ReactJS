import React from "react"
import { Link } from "react-router-dom"
import { loginContext } from "../store/login-context"
import styles from "./HomePage.module.css"

function HomePageHeader(props) {
    const logCntx = React.useContext(loginContext)

    return <header>
        <h4> Zaky </h4>
        <Link className={styles.headerElements} to="/" onClick={() => {
            logCntx.doLogout()
        }} reloadDocument>Loggout</Link>

    </header>
}


export function HomePage(props) {

    return <>
        <HomePageHeader />
        <h1>
            Home
        </h1>
    </>
}