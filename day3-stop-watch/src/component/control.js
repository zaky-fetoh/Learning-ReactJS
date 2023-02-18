import styles from "./control.module.css"

function Button(props) {
    return <button className={`${props.className} 
            ${styles.bttn}`}
        onClick={props.onClick}
        >
        {props.children}
    </button>
}


export default function (props) {
    return <div className={styles.control}>
        <Button onClick={props.startClick}>{props.name}</Button>
    </div>
}   