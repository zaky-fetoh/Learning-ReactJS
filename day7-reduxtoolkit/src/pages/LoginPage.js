import { createForm } from "../component/FormCreator";
import styles from "./LoginPage.module.css"
import * as Auth from "../feature/auth"

import * as reactRedux from "react-redux"



export default function (props) {

    const dispatch = reactRedux.useDispatch();
    const authSelect = reactRedux.useSelector(s=>s.auth )

    const Form = createForm({userName:"", password:""}, (values, f) => {
        dispatch(Auth.actions.doLogin({userName:values.userName}))
        console.log(authSelect)
        console.log(values);
        // f.restForm({values:{userName:"", password:""}});
    })

    return <div className={styles.container}>
        <Form />
        {authSelect.login ? <h1>{authSelect.userName}</h1> : ""}
    </div>
}