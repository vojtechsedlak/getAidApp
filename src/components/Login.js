import React from "react";
import { Formik, Field } from "formik";
import { loginSchema } from "../_helper/validationSchema";

function Login() {
  const onFormSubmit = values => {
    console.log(values);
  };
  return (
    <header className="bgTheme flex-center flex">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        isInitialValid={false}
        onSubmit={onFormSubmit}
        render={({ touched, handleSubmit, isValid, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className="center card">
              <div className="tc-white center">Login</div>
              <div className="mt20">
                <div className="p10">
                  <Field
                    className="Input"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  {touched.email && errors.email && (
                    <div className="errorMsg"> {errors.email} </div>
                  )}
                </div>
                <div className="p10">
                  <Field
                    className="Input"
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                </div>
                {touched.password && errors.password && (
                  <div className="errorMsg"> {errors.password} </div>
                )}
                <div className="p10">
                  <button className="btn p10" type="submit" disabled={!isValid}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </header>
  );
}

export default Login;
