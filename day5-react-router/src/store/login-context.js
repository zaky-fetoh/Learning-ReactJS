import react from "react"

export const loginContext = react.createContext({
    login:"false",
    doLogin:()=>{}, 
    doLogout:()=>{} 
})

export function Context(props){
    const [loginState, setLogin] = react.useState(
        localStorage.getItem("Loggedin")
    )

    return <loginContext.Provider value={{
        login:loginState,
        doLogin:()=>{
            setLogin("true");
            localStorage.setItem("Loggedin","true");
        }, 
        doLogout:()=>{
            setLogin("false");
            localStorage.setItem("Loggedin","false");
        }, 
    }}>{props.children}
    </loginContext.Provider>
}