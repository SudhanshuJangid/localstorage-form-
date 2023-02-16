import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field);
    console.log(meta);
    return (
        <>
            <h6>Constomname hello....</h6>
            <label>{label}</label><br />
            <input {...field}{...props} className={meta.touched && meta.error ? "input-error" : ""} />
            {meta.error && meta.touched && <small className="error-text">{meta.error}</small>}<br />
        </>
    )
}
export default CustomInput;