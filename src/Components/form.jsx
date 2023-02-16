import { useFormik } from "formik";
import React from "react";
import { Schehma } from './scehma';

const onSubmit = async (values, action) => {
    console.log(values);
    console.log(action);
    await new Promise((reslove) => setTimeout(reslove, 2000));
    // action.resetForm();
}
const initialValues = {
    name: "",
    email: "",
    channel: "",
    age: "",
    password: "",
    confirmpassword: ""
}
const Form = () => {

    const { values, errors, touched, handleBlur, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: Schehma,
        onSubmit
    })
    console.log(errors)
    return (
        <>
            <h1>Welcome Form..</h1>
            <div>
                <form onSubmit={handleSubmit} autoComplete="off">

                    <label>Name</label><br />
                    <input type="text" name="name" id="name" onChange={handleChange} value={values.name} onBlur={handleBlur}
                        className={errors.name && touched.name ? "input-error" : ""} /><br />
                    {errors.name && touched.name && <small className="error-text">{errors.name}</small>}


                    <label>E-mail</label><br />
                    <input type="email" name="email" id="email" onChange={handleChange} value={values.email} onBlur={handleBlur} className={errors.email && touched.email ? "input-error" : ""} /><br />
                    {errors.email && touched.email && <small className="error-text">{errors.email}</small>}

                    <label>Channel</label><br />
                    <input type="text" name="channel" id="channel" onChange={handleChange} value={values.channel} onBlur={handleBlur} className={errors.channel && touched.channel ? "input-error" : ""} /><br />
                    {errors.channel && touched.channel && <small className="error-text">{errors.channel}</small>}

                    <label>Age</label><br />
                    <input type="number" name="age" id="age" onChange={handleChange} value={values.age} onBlur={handleBlur} className={errors.age && touched.age ? "input-error" : ""} /><br />
                    {errors.age && touched.age && <small className="error-text">{errors.age}</small>}


                    <label>Password</label><br />
                    <input type="password" name="password" id="password" onChange={handleChange} value={values.password} onBlur={handleBlur} className={errors.password && touched.password ? "input-error" : ""} /><br />
                    {errors.password && touched.password && <small className="error-text">{errors.password}</small>}

                    <label>Confirm Password</label><br />
                    <input type="password" name="confirmpassword" id="confirmpassword" onChange={handleChange} value={values.confirmpassword} onBlur={handleBlur} className={errors.confirmpassword && touched.confirmpassword ? "input-error" : ""} /><br />
                    {errors.confirmpassword && touched.confirmpassword && <small className="error-text">{errors.confirmpassword}</small>}

                    <button disabled={isSubmitting} type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Form;