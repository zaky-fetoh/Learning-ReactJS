import InputForm from "./InputNewsForm"
import styles from "./InputNews.module.css"

export default function(props){
 return <div className={styles.inputNews}>
    <InputForm updateContent={props.updateContent}/>
 </div>
}