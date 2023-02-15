import styles from "./InputNewsForm.module.css"
import react from "react"

export default function(props){
    const [headerValue,setHeaderValue] = react.useState("")
    const [contentValue, setContentValue] = react.useState("")
    const headerOnChangeHadler = (event)=>{
        setHeaderValue(event.target.value)
    }
    const contentOnChangeHandler= (event)=>{
        setContentValue(event.target.value)
    }
    const publishOnClickHandler = (event)=>{
        event.preventDefault()
        props.updateContent({
            header:headerValue, content:contentValue,
        })
        setContentValue("")
        setHeaderValue("")
    }

    return <form>
        <div className={styles.container}>
        <label>Post Header:</label> <br/>
        <input type="text" value={headerValue} onChange={headerOnChangeHadler}/> <br/>
        <label>Post Content:</label><br/>
        <input className={styles.labelf} type="text" value={
           contentValue
        } onChange={contentOnChangeHandler}/><br/>
        </div>
        <button type="submit" onClick={publishOnClickHandler}>Publish</button>
    </form>
}