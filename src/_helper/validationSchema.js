import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("Email Required"),
  password: Yup.string().required("Password Required")
});

export { loginSchema };
