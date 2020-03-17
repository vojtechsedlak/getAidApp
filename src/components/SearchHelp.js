import React from "react";
import { Formik } from "formik";
import { SearchSchema } from "../_helper/validationSchema";
import SearchResultCard from "./SearchResultCard";

const SearchHelp = () => {
  const onFormSubmit = values => {
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={{ searchInput: "" }}
        validationSchema={SearchSchema}
        onSubmit={onFormSubmit}
        render={({ handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="bgTheme">
              <div className="searchContainer">
                <div className="flex row">
                  <div className="flex row m10">
                    <input
                      placeholder="search"
                      className="Input"
                      onChange={handleChange}
                      type="text"
                      name="searchInput"
                    />
                  </div>
                  <div className="flex row m10">
                    <button className="searchButton">Search</button>
                  </div>
                </div>

                <div className="p10">
                  <SearchResultCard />
                  <SearchResultCard />
                  <SearchResultCard />
                  <SearchResultCard />
                  <SearchResultCard />
                  <SearchResultCard />
                  <SearchResultCard />
                  <SearchResultCard />
                  <SearchResultCard />
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </>
  );
};

export default SearchHelp;
