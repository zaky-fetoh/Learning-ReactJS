import styles from "./Login.module.css"
import react from "react"

function isValidUserNamePassword({ userName, password }) {
    return userName.length >= 3 && password.length >= 4;
}
function isCorrectPasword({ userName, password }){
    return true;
}



function reducerFn(prev, action) {
    if (action.type === "updateUserName")
        return { ...prev, userName: action.value }
    if (action.type === "updatePassword")
        return { ...prev, password: action.value }
    if (action.type === "isValid")
        return {
            ...prev,
            isValid: isValidUserNamePassword(prev)
        }
}

export default function Login(props) {
    const passwordRef = react.useRef()
    const userNameRef = react.useRef()


    const [state, dispatcher] = react.useReducer(reducerFn,
        {}, (init) => {
            return {
                userName: "",
                password: "",
                isValid: false,
            }
        })

    const userOnChangeHandler = (e) => {
        dispatcher({
            type: "updateUserName",
            value: e.target.value
        })
    }

    const passwordOnChangeHandler = (e) => {
        dispatcher({
            type: "updatePassword",
            value: e.target.value
        })
    }
    const submitButtonAction = react.useCallback((e) => {
        e.preventDefault();
        const LoggedIn = isCorrectPasword(state)
        
    }, [])

    react.useEffect(() => {
        const Timer = setTimeout(() => {
            dispatcher({ type: "isValid" })
        }, 200)
        return () => { clearTimeout(Timer) }
    }, [state])

    return <div className={styles.formContainer}><form>
        <label>UserName</label><br />
        <input type="text" ref={userNameRef}
            onChange={userOnChangeHandler} /><br />
        <label>Password</label><br />
        <input type="password" ref={passwordRef}
            onChange={passwordOnChangeHandler} /><br />
        <button type="submit"
            className={!(state.isValid) && styles.disabled
                || styles.enabled}
            onClick={submitButtonAction}
        >Login</button>
    </form></div>
}
