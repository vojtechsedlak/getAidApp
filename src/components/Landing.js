import React from 'react'
import { navigate } from '@reach/router'
import Logo from '../sou.svg'
import cover from '../cover.jpg'

const Landing = () => {
  return (
    <>
      <header className='App-header'>
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
        <p style={{ fontSize: '30px' }}>SumOfUs Aid Tool</p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button
            style={{
              width: '100px',
              background: '#f8492d',
              height: '40px',
              margin: '10px',
              fontSize: '16px',
              color: 'white',
              border: '0px'
            }}
            onClick={() => navigate('ask')}
          >
            Ask Help
          </button>
          <button
            style={{
              width: '100px',
              background: '#f8492d',
              height: '40px',
              margin: '10px',
              fontSize: '16px',
              color: 'white',
              border: '0px'
            }}
            onClick={() => navigate('search')}
          >
            Offer Help
          </button>
        </div>
      </header>
    </>
  )
}

export default Landing
