import * as yup from "yup";



export const Schehma = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().required("Required").email(),
    channel: yup.string().required("Required"),
    age: yup.number().required("Required").positive().integer(),
    password: yup.string().required("Required").min(5, "Your password must be longer than 5 characters.")
        .max(25)
        .matches(/^(?=.{6,})/, "Must Contain 6 Characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])/,
            "Must Contain One Uppercase, One Lowercase"
        )
        .matches(
            /^(?=.*[!@#\$%\^&\*])/,
            "Must Contain One Special Case Character"
        )
        .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number"),

    confirmpassword: yup.string().required("Required").oneOf([yup.ref("password"), null], "Passwords must match")

});


export const AdvancedSchehma = yup.object().shape({
    username: yup.string().required("Required").min(3, "Username must be atleast 3 charactersm long.."),
    jobtype: yup.string().required("Required").oneOf(["designer", "developer", "manager", "other"], "plz select one of the options.."),
    acceptedTos: yup.boolean().oneOf([true], "plz select the term of services...")


});