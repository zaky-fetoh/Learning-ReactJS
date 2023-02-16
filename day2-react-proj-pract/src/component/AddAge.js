import styles from "./AddAge.module.css"

function InputForm(props){ 

    return <form>
        <label>UserName</label> <br/>
        <input type="text"/><br/>
        <label >CurrentAge</label><br/>
        <input type="text" /> <br/>
        <button type="submit">submit</button> <br/>
    </form>

}

export default function(props){
    return <div className={styles.inputForm}>
        <InputForm/>
    </div>
}