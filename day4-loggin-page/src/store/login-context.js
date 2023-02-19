import react from "react" 


export const LogginContext = react.createContext({
    isLoggin: false, 
    doLoggin: ()=>{}, 
    doLoggout: ()=>{}, 
})


export function LogginContextProv(props){
    const [loggin, setloggin] = react.useState(false);
    const doLogginFn = ()=>{setloggin(true)};
    const doLoggoutFn= ()=>{setloggin(false)};
    return <LogginContext.Provider value={{
        isLoggin: loggin, 
        doLoggin: doLogginFn, 
        doLoggout: doLoggoutFn, 
    }}>{props.children}
    </LogginContext.Provider>
}

