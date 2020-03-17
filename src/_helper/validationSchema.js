import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("Email Required"),
  password: Yup.string().required("Password Required")
});

const askSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  content: Yup.string().required("Content is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required")
});

export { loginSchema, askSchema };
