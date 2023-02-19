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

export default function LoginForm(props) {

    const [formState, dispatcher] = react.useReducer(
        formReducerfn, {}, () => ({
            NameStateValue: "",
            PasswordStateValue: "",
            valid: false,
        }));
    const onChangeFactory = (type) => {
        return (event) => {
            dispatcher({
                type: type, value: event.target.value,
            })
        }
    }
    return <div className={styles.FormStyle}> <form>
        <InputWithLabel label="UName"
            type="text"
            title="InterUserName"
            value={formState.NameStateValue}
            onChange={onChangeFactory("updateName")} />
        <InputWithLabel label="Password"
            type="password"
            title="InterUserName"
            value={formState.PasswordStateValue}
            onChange={onChangeFactory("updatePassword")}
        /><br />
        <button >Loggin</button>
    </form></div>
}