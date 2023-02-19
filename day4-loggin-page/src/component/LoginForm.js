import styles from "./LoginForm.module.css"
import react from "react"


function InputWithLabel(props) {

    return <>
        <label>{props.label}</label>
        <input type={props.type}
            title={props.title}
            value={props.value}
            onChange={props.onChange}
        ></input>
    </>

}

function formReducerfn(preState, action) {
    const newState = { ...preState }
    if (action.type === "updateName")
        newState.NameStateValue = action.value;
    if (action.type === "updatePassword")
        newState.PasswordStateValue = action.value;
    if (action.type === "updateValidity")
        newState.valid = action.value;
    return newState;
}

const onChangeFactory = (type, dispatcher) => {
    return (event) => {
        dispatcher({
            type: type, value: event.target.value,
        })
    }
}

const checkForValidity = (name, password) => {
    return name.includes("@") && password.length > 4;
}

export default function LoginForm(props) {

    const [formState, dispatcher] = react.useReducer(
        formReducerfn, {}, () => ({
            NameStateValue: "",
            PasswordStateValue: "",
            valid: false,
        }));

    react.useEffect(() => {
        const timer = setTimeout(() => {
            dispatcher({
                type: "updateValidity", value: checkForValidity(
                    formState.NameStateValue,
                    formState.PasswordStateValue
                )
            })
        }, 500)
        return () => { clearTimeout(timer) }
    }, [formState.NameStateValue,
    formState.PasswordStateValue])

    
    const onClickSubmit = (e)=>{
        e.preventDefault(); 
        console.log("hee e")
    }


    return <div className={styles.FormStyle}> <form>
        <InputWithLabel label="UName"
            type="text"
            title="InterUserName"
            value={formState.NameStateValue}
            onChange={onChangeFactory("updateName",
                dispatcher)} />
        <InputWithLabel label="Password"
            type="password"
            title="InterUserName"
            value={formState.PasswordStateValue}
            onChange={onChangeFactory("updatePassword",
                dispatcher)}
        /><br />
        <button className={!(formState.valid
            ) && styles.disabledButton || undefined}
            onClick={onClickSubmit}
            >Loggin</button>
    </form></div>
}