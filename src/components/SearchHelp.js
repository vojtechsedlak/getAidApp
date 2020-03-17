import React from "react";
import { Formik } from "formik";
import { SearchSchema } from "../_helper/validationSchema";
import SearchResultCard from "./SearchResultCard";
import ReactGA from 'react-ga';

const SearchHelp = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
  const onFormSubmit = values => {
    console.log(values);
    ReactGA.event({
      category: 'User',
      action: 'Searched for help'
    });
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
