import styles from "./AddAge.module.css";
import react from "react";

function InputForm(props) {
    const [formStates, setFormStates] = react.useState({
        name: "", age: ""
    })
    const onNameChangeHandler = (event) => {
        setFormStates((pre) => ({
            ...pre, name: event.target.value,
        }))
    }
    const onAgeChangeHandler = (event) => {
        setFormStates((pre) => ({
            ...pre, age: event.target.value,
        }))
    }
    const onSubmitClick = (event) => {
        event.preventDefault();
        if (formStates.name.trim() === "") {
            props.showMsg({ show: true, msg: "interCorrectData" })
            return
        }

        props.insertNewElement(prev => ([{
            ...formStates, id: Math.random().toString(),
        }, ...prev]))
        setFormStates({
            name: "", age: "",
        })
    }

    return <form>
        <label>UserName</label> <br />
        <input type="text" value={formStates.name}
            onChange={onNameChangeHandler} /><br />
        <label >CurrentAge</label><br />
        <input type="text" value={formStates.age}
            onChange={onAgeChangeHandler} /> <br />
        <button type="submit"
            onClick={onSubmitClick}>submit</button> <br />
    </form>

}

export default function (props) {
    return <div className={styles.inputForm}>
        <InputForm insertNewElement={props.insertNewElement}
            showMsg={props.showMsg} />
    </div>
}