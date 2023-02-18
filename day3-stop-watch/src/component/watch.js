import styles from "./watch.module.css"

export default function Watch(props){
    return <h2 className={styles.watch}>
        {`Time: ${props.time}`}
    </h2>
}