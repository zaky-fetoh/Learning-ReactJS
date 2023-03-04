import * as formik from "formik";
import * as yup from "yup";

const initialValues = {
    userName: "",
    password: "",
    password1: "",
    password2: "",

}



export const createForm = (initialValues, submitcallBack) => {
    return function (props) {
        const vlaS = {};
        for(let k in initialValues){
            vlaS[k] = yup.string().required("Required");
        }
        const validationSchema = yup.object().shape(vlaS)
        const formh = formik.useFormik({
            initialValues,
            validationSchema,
            onSubmit:submitcallBack
        });
        const createInput = (name) => {
            return <>
                <input name={name} id={name} key={name}
                    type={name === "password" ? name : "text"}
                    onChange={formh.handleChange}
                    value={formh.values[name]}
                    onBlur={formh.handleBlur}
                    about={"youShouldInterYourPassword"}
                    placeholder={name}
                />
                <h6 style={{
                    color: "red", fontSize: ".6em"
                }}>{formh.touched[name] && formh.errors[name] || ""}</h6>
            </>
        }
        return <form onSubmit={formh.handleSubmit}>
            {Object.keys(initialValues).map(e => {
                return createInput(e)
            })}
            <button type="submit">sigin</button>
        </form>
    }}

export default createForm(initialValues, (values,f)=>{
    console.log(values);
    f.restForm();
})