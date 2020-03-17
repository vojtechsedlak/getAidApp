import React from "react";
import { Formik } from "formik";
import { askSchema } from "../_helper/validationSchema";
import { countriesList } from "../_helper/countries";
import Logo from "../sou.svg";
import { navigate } from "@reach/router";

const AskHelp = () => {
  const onFormSubmit = values => {
    console.log(values);
  };
  //   function onCountryChange(selectedCountry) {
  //     formik.setFieldValue("country", selectedCountry);
  //   }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#282c34"
      }}
    >        
    <img src={Logo} style={{width: '140px', height: '80px', position: 'absolute', cursor:'pointer', top: '0', left: '0', paddingLeft: '30px'}} onClick={() => navigate('/')} />
      <div style={{ color: "white", fontSize: "24px", margin: "30px 0" }}>
        Enter details about the help that you need
      </div>
      <Formik
        initialValues={{
          name: "",
          city: "",
          country: "Afghanistan",
          content: ""
        }}
        validationSchema={askSchema}
        isInitialValid={false}
        onSubmit={onFormSubmit}
        render={({
          touched,
          handleChange,
          handleSubmit,
          isValid,
          errors,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="center ">
              <div className="row flex">
                <input
                  className="w600"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex row">
                <input
                  className="w600"
                  type="text"
                  name="city"
                  onChange={handleChange}
                  placeholder="City"
                  required
                />
              </div>
              <div className="flex row">
                <select id="country" name="country" onChange={handleChange}>
                  {countriesList.map(country => {
                    return (
                      <option value={country.label}>{country.label}</option>
                    );
                  })}
                </select>
              </div>
              <div className="flex row">
                <textarea
                  onChange={handleChange}
                  className="w600"
                  placeholder="Enter your content"
                  name="content"
                  required
                  wrap
                  rows={5}
                />
              </div>
              <div>
                <button className="btn" type="submit" disabled={!isValid}>
                  Save
                </button>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default AskHelp;
