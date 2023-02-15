import styles from "./FeedNews.module.css"

function Wall(props){
    return (<div className={styles.wall}>
        {props.children}
    </div>);
}


export default Wall