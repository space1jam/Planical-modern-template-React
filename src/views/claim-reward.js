import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './claim-reward.css'

const ClaimReward = (props) => {
  return (
    <div className="claim-reward-container">
      <Helmet>
        <title>claim-reward - Planical modern template</title>
        <meta
          property="og:title"
          content="claim-reward - Planical modern template"
        />
      </Helmet>
      <h2 className="claim-reward-text">
        <span className="claim-reward-text01">
          Claim
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>Your Reward Here!</span>
      </h2>
      <button type="button" className="claim-reward-button button">
        Seasonal
      </button>
      <button type="button" className="claim-reward-button1 button">
        Health
      </button>
      <button type="button" className="claim-reward-button2 button">
        Motor
      </button>
      <Link to="/travel" className="claim-reward-navlink button">
        Travel
      </Link>
      <button type="button" className="claim-reward-button3 button">
        Property
      </button>
      <button type="button" className="claim-reward-button4 button">
        Accident
      </button>
      <span className="claim-reward-text03">Text</span>
      <main className="claim-reward-banner">
        <Navbar rootClassName="navbar-root-class-name7"></Navbar>
        <span className="claim-reward-text04">Seasonal Rewards!</span>
        <div className="claim-reward-container1">
          <div className="claim-reward-container2">
            <div className="claim-reward-get-started button">
              <span className="claim-reward-text05">Get started</span>
            </div>
            <div className="claim-reward-buttons"></div>
          </div>
          <div className="claim-reward-book-demo button">
            <span className="claim-reward-text06">Book a demo</span>
          </div>
        </div>
        <div className="claim-reward-banner1">
          <Link to="/redeemed" className="claim-reward-navlink1 button">
            Redeem
          </Link>
          <h2 className="claim-reward-text07">
            <br></br>
            <span className="claim-reward-text09">MacBook Pro</span>
            <br className="claim-reward-text10"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
          <h2 className="claim-reward-text12">*30,000 pt</h2>
          <span className="claim-reward-text13">
            <span>
              *Limited to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="claim-reward-text15">
              Diamond
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>member only</span>
          </span>
        </div>
        <div className="claim-reward-banner2">
          <span className="claim-reward-text17">
            <span>
              *Limited to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="claim-reward-text19">
              Silver
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>member only</span>
          </span>
          <h2 className="claim-reward-text21">Smart TV</h2>
          <h2 className="claim-reward-text22">*8,000 pt</h2>
          <button type="button" className="claim-reward-button5 button">
            Redeem
          </button>
        </div>
        <div className="claim-reward-banner3">
          <h2 className="claim-reward-text23">
            <span>
              Universal Studio
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Singapore</span>
          </h2>
          <h2 className="claim-reward-text27">*2,000 pt</h2>
          <span className="claim-reward-text28">
            <span>
              *Limited to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Bronze</span>
            <span> member only</span>
          </span>
        </div>
        <button type="button" className="claim-reward-button6 button">
          Redeem
        </button>
        <div className="claim-reward-banner4">
          <h2 className="claim-reward-text32">iPhone 14 Pro</h2>
          <h2 className="claim-reward-text33">*20,000 pt</h2>
          <button type="button" className="claim-reward-button7 button">
            Redeem
          </button>
          <span className="claim-reward-text34">
            <span>
              *Limited to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="claim-reward-text36">
              Gold
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>member only</span>
          </span>
          <Link to="/personalized" className="claim-reward-navlink2 button">
            Personalize my own reward
          </Link>
        </div>
      </main>
      <h2 className="claim-reward-heading section-heading">
        Seasonal Rewards!
      </h2>
      <button type="button" className="claim-reward-button8 button">
        Button
      </button>
    </div>
  )
}

export default ClaimReward
