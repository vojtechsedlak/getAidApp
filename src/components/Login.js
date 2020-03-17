import React from "react";
import { Formik } from "formik";
import { loginSchema } from "../_helper/validationSchema";

function Login() {
  const onFormSubmit = values => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      isInitialValid={true}
      onSubmit={onFormSubmit}
      render={({ touched, handleChange, handleSubmit, isValid, errors }) => (
        <form onSubmit={handleSubmit}>
          <div className="center card">
            <div className="tc-white center">Login</div>
            <div className="row flex">
              <input
                className="w150"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="flex row">
              <input
                className="w150"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div>
              <button className="btn" type="submit" disabled={!isValid}>
                Login
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
}

export default Login;
