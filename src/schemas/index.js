import * as yup from "yup"

const loginSchema = {
    email: yup.string().required("пожалуйста, введите вашу Электронную почту"),
}



export {loginSchema}