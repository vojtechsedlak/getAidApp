import React from "react";
import { Formik, Field } from "formik";
import { SignUpSchema } from "../_helper/validationSchema";

function SignUp() {
  const onFormSubmit = values => {
    console.log(values);
  };
  return (
    <header className="bgTheme flex-center flex">
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignUpSchema}
        isInitialValid={false}
        onSubmit={onFormSubmit}
        render={({ touched, handleSubmit, isValid, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className="center card">
              <div className="tc-white center">Signup</div>
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
                  {touched.password && errors.password && (
                    <div className="errorMsg"> {errors.password} </div>
                  )}
                </div>
                <div className="p10">
                  <Field
                    className="Input"
                    type="password"
                    name="confirmPassword"
                    placeholder="confirmPassword"
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div className="errorMsg"> {errors.confirmPassword} </div>
                  )}
                </div>
                <div className="p10">
                  <button className="btn p10" type="submit" disabled={!isValid}>
                    Signup
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

export default SignUp;
