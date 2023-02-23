import styles from "./Login.modeule.css"


export default function Login(props){


    return <div><form>
        <label>UserName</label><br/>
        <input type="text"/><br/>
        <label>Password</label><br/>
        <input type="password"/><br/>
        <button type="submit">Login</button>
    </form></div>
}
