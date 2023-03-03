import * as formik from "formik"
import * as yup from "yup"

const initialValues = {
    firstName: "",
    secondName: "",
    email: "",
    password: "",
}

const validationSchema = yup.object().shape({
    firstName: yup.string("This Field Should be astring")
        .min(3, "This Should be min length of 3")
        .max(10, "This Should Be max length of 10")
        .required("THis Field is required"),
    secondName: yup.string("This Field Should be astring")
        .min(3, "This Should be min length of 3")
        .max(10, "This Should Be max length of 10")
        .required("THis Field is required"),
    email: yup.string().min(3, "This Should be of length of 3")
        .required("this Fieldis required")
        .email("This should be email"),
    password: yup.string().min(5, "this should be a min length of 5")
        .required("required")
});


export default function Form(props) {


    const formikHook = formik.useFormik({
        initialValues,
        validationSchema,
        onSubmit:(e) => {
            console.log(formikHook.values);
        }
    });


    return <form onSubmit={formikHook.handleSubmit}>
        <input id="firstName"
            type="text"
            placeholder="First Name"
            onBlur={formikHook.handleBlur}
            onChange={formikHook.handleChange}
            value={formikHook.values.firstName} />
        <p>{formikHook.touched.firstName && formikHook.errors.firstName || "" }</p>
        <input id="secondName"
            type="text"
            placeholder="Second Name"
            onBlur={formikHook.handleBlur}
            onChange={formikHook.handleChange}
            value={formikHook.values.secondName} />
        <p>{formikHook.touched.secondName && formikHook.errors.secondName || "" }</p>
        <input id="email"
            type="text"
            placeholder="Email"
            onBlur={formikHook.handleBlur}
            onChange={formikHook.handleChange}
            value={formikHook.values.email} />
        <p>{formikHook.touched.email && formikHook.errors.email || "" }</p>
        <input id="password"
            type="password"
            placeholder="Password"
            onBlur={formikHook.handleBlur}
            onChange={formikHook.handleChange}
            value={formikHook.values.password} />
        <p>{formikHook.touched.password && formikHook.errors.password || "" }</p>
        <button type="submit"> SUbmit</button>
    </form>
}

