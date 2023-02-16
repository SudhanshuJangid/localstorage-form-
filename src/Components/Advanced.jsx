import { Field, Form, Formik } from "formik";
import React from "react";
import CustomInput from "./CustomInput";
import Customselect from "./Customselect";
import { AdvancedSchehma } from "./scehma";

const Advanced = () => {
    const onSubmit = async (values, action) => {
        console.log(values);
        console.log(action);
        await new Promise((reslove) => setTimeout(reslove, 2000));
        action.resetForm();
    }
    return (
        <>
            <h1>Advanced form....</h1>
            <Formik initialValues={{ username: "", jobtype: "", acceptedTos: "" }} validationSchema={AdvancedSchehma} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <CustomInput
                            label="Username" name="username" type="text" placeholder="Enter your Name"
                        />
                        <Customselect label="Job type" name="jobtype" placeholder="plz select the Job" >
                            <option value="">plz selectone of the option</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="manager">Product manager</option>
                            <option value="other">other</option>
                        </Customselect>

                        {/* <Field type="text" name="name" placeholder="Name" /> */}
                        <button disabled={isSubmitting} type="submit">Submit</button>
                    </Form>
                )}

            </Formik>
        </>
    )
}
export default Advanced;