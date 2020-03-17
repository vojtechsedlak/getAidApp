import React from 'react'
import { Formik } from 'formik'
import { askSchema } from '../_helper/validationSchema'
import { countriesList, categoriesList } from '../_helper/listItems'
import Logo from '../sou.svg'
import { navigate } from '@reach/router'
import ReactGA from 'react-ga';


const AskHelp = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
  const onFormSubmit = values => {
    console.log(values);
    ReactGA.event({
      category: 'User',
      action: 'Asked for help'
    });
  }
  //   function onCountryChange(selectedCountry) {
  //     formik.setFieldValue("country", selectedCountry);
  //   }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#282c34'
      }}
    >
      <img
        src={Logo}
        alt='sou-logo'
        style={{
          width: '140px',
          height: '80px',
          position: 'absolute',
          cursor: 'pointer',
          top: '0',
          left: '0',
          paddingLeft: '30px'
        }}
        onClick={() => navigate('/')}
      />
      <Formik
        initialValues={{
          name: '',
          city: '',
          country: 'Afghanistan',
          content: '',
          category: 'Financial Help'
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
            <div className='center card '>
              <div
                style={{ color: 'white', fontSize: '24px', margin: '30px 0' }}
              >
                Enter details about the help that you need
              </div>
              <div className='row flex'>
                <input
                  className='Input'
                  type='text'
                  name='name'
                  onChange={handleChange}
                  placeholder='Title'
                  required
                  style={{ width: '600px' }}
                />
              </div>
              <div className='flex row'>
                <input
                  className='Input'
                  type='text'
                  name='city'
                  onChange={handleChange}
                  placeholder='City'
                  required
                  style={{ width: '600px' }}
                />
              </div>
              <div className='flex row'>
                <select
                  id='country'
                  name='country'
                  className='Input'
                  style={{ width: '600px' }}
                  onChange={handleChange}
                >
                  {countriesList.map(country => {
                    return (
                      <option value={country.label}>{country.label}</option>
                    )
                  })}
                </select>
              </div>
              <div className='flex row'>
                <select
                  id='category'
                  name='category'
                  className='Input'
                  style={{ width: '600px' }}
                  onChange={handleChange}
                >
                  {categoriesList.map(category => {
                    return (
                      <option value={category.label}>{category.label}</option>
                    )
                  })}
                </select>
              </div>
              <div className='flex row'>
                <textarea
                  onChange={handleChange}
                  className='Input'
                  placeholder='Describe your need'
                  name='content'
                  required
                  wrap
                  rows={5}
                  style={{ width: '600px' }}
                />
              </div>
              <div>
                <button
                  className='btn'
                  type='submit'
                  disabled={!isValid}
                  style={{ padding: '10px', borderRadius: '4px' }}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default AskHelp
