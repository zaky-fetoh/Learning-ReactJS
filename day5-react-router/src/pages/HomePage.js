import React, { useState } from "react"
import { Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"
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

function NavFooter(props){
    return <footer>
        <nav>
            <Link to="/page1"> Page1 </Link> | 
            <Link to="/page2"> Page2 </Link> |
            <Link to="/page3"> Page3 </Link> |
            <Link to="/page4"> Page4 </Link> |
            <Link to="/page5"> Page5 </Link> |
        </nav>
    </footer>
}

function PageNotFound(props){
    const [cnt,setCnt] = useState(5)
    const navg = useNavigate();
    React.useEffect(()=>{

        if(cnt === 0){
            navg("/");
            window.location.reload();
            return
        }
        setTimeout(()=>{
            setCnt(cnt-1)
        },1000)
    },[cnt])
    return <><h1>NotFound </h1>
    <h5>{`Redirecting to the home page in ${cnt} sec`}</h5>
    </>
}


function Pagei(props){
    const obj = useParams();
    return <h1>
        {`Page ${obj.id}`}
    </h1>
}
export function HomePage(props) {

    return <>
        <HomePageHeader />
        <h1>
            Home
        </h1>
        <Routes>
            <Route index element={<h1>WellCome</h1>} />
            <Route path="/page1" element={<h1>page1</h1>}/>
            <Route path="/page2" element={<h1>page2</h1>}/>
            <Route path="/page3" element={<h1>page3</h1>}/>
            <Route path="/page4" element={<h1>page4</h1>}/>
            <Route path="/page5" element={<h1>page5</h1>}/>
            <Route path="/page/:id" element={<Pagei/>}/>
            <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
        <NavFooter/>
    </>
}