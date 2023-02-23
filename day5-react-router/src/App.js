import  LoggingPage  from "./pages/LoggingPage";
import { Context, loginContext } from "./store/login-context";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css"
import { HomePage } from "./pages/HomePage";
import React from "react";

function Home(props){
  const logCntx = React.useContext(loginContext)
  if (logCntx.login === "true")
    return <HomePage/> ;
  else{
    	return <LoggingPage/>
  }
}

function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Context>
  );
}

export default App;
