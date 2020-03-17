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

const SignUpSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("Email Required"),
  password: Yup.string()
    .required("Password Required")
    .min(6, "Password must contain atleast 6 characters"),
  confirmPassword: Yup.string()
    .required("Password Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
});

const SearchSchema = Yup.object({
  searchInput: Yup.string()
});

export { loginSchema, SignUpSchema, SearchSchema, askSchema };
