import * as formik from "formik";
import * as yup from "yup";


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
                <div style={{
                    color: "red", fontSize: ".6em"
                }}>{formh.touched[name] && formh.errors[name] || ""}</div>
            </>
        }
        return <form onSubmit={formh.handleSubmit}>
            {Object.keys(initialValues).map(e => {
                return createInput(e)
            })}
            <button type="submit">sigin</button>
        </form>
    }}
