import { useField } from "formik";
import React from "react";

const Customselect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field);
    console.log(meta);
    return (
        <>
            <label>{label}</label><br />
            <select {...field}{...props} className={meta.touched && meta.error ? "input-error" : ""} />
            {meta.error && meta.touched && <small className="error-text">{meta.error}</small>}<br />
        </>
    )
}
export default Customselect;