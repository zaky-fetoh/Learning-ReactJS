import styles from "./ShowsInfo.module.css";

function Entry(props){
    return <h3 className={styles.entry}>
        {`${props.name} (${props.age} years old)`}
    </h3>
}


export default function(props){
    return <div className={styles.container}>
        {props.entries.map(e=><Entry key={e.id} name={e.name} age={e.age}/>)}
    </div>
}