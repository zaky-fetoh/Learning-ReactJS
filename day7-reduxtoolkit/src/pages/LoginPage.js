import { createForm } from "../component/FormCreator";
import styles from "./LoginPage.module.css"

const initialValues = {
    userName: "",
    password: "",
}


const Form =  createForm(initialValues, (values,f)=>{
    console.log(values);
    f.restForm();
})


export default function(props){
    return <div className={styles.container}>
        <Form/>
    </div>
}