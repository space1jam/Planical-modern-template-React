import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './redeemed.css'

const Redeemed = (props) => {
  return (
    <div className="redeemed-container">
      <Helmet>
        <title>redeemed - Planical modern template</title>
        <meta
          property="og:title"
          content="redeemed - Planical modern template"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name9"></Navbar>
      <span className="redeemed-text">
        <span className="redeemed-text01">
          You have
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="redeemed-text02">Successfully</span>
        <span className="redeemed-text03">
          {' '}
          Redeemed
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br className="redeemed-text04"></br>
        <span className="redeemed-text05">your reward!</span>
        <br className="redeemed-text06"></br>
        <span className="redeemed-text07">
          Check your e-mail for the verification
        </span>
        <br></br>
        <br></br>
        <span>
          Note: Your point is automatically deducted from your account
        </span>
        <br></br>
        <span>but your tier will remain the same.  </span>
      </span>
      <span className="redeemed-text13">Congratulations!</span>
    </div>
  )
}

export default Redeemed
