import * as yup from "yup"

const loginSchema = {
    email: yup.string().required("пожалуйста, введите вашу Электронную почту"),
}

const profileSchema = {
    name: yup.string().required(),
    lastName: yup.string().required(),
    mobile:yup.string().required(),
    data_of_birth:yup.string().required(),
}



export {
    loginSchema,
    profileSchema
}