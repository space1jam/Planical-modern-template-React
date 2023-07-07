import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './travel.css'

const Travel = (props) => {
  return (
    <div className="travel-container">
      <Helmet>
        <title>travel - Planical modern template</title>
        <meta property="og:title" content="travel - Planical modern template" />
      </Helmet>
      <Link to="/claim-reward" className="travel-navlink button">
        Seasonal
      </Link>
      <button type="button" className="travel-button button">
        Health
      </button>
      <button type="button" className="button">
        Button
      </button>
      <button type="button" className="travel-button2 button">
        Motor
      </button>
      <button type="button" className="travel-button3 button">
        Travel
      </button>
      <button type="button" className="travel-button4 button">
        Property
      </button>
      <button type="button" className="travel-button5 button">
        Accident
      </button>
      <Navbar rootClassName="navbar-root-class-name8"></Navbar>
      <main className="travel-banner">
        <span className="travel-text">Travel Rewards!</span>
        <div className="travel-banner1">
          <div className="travel-container1">
            <h1 className="travel-text01">
              Discount Code for Tune Hotel ticket 
            </h1>
            <h1 className="travel-text02">*1000 points</h1>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=300"
            className="travel-image"
          />
        </div>
        <div className="travel-banner2">
          <div className="travel-container2">
            <h1 className="travel-text03">
              Discount Code for every AirAsia ticket flight
            </h1>
            <h1 className="travel-text04">*5000 points</h1>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=300"
            className="travel-image1"
          />
        </div>
        <div className="travel-banner3">
          <div className="travel-container3">
            <h1 className="travel-text05">
              Free hotel ticket for 2 nights in Tune Hotel
            </h1>
            <h1 className="travel-text06">*10000 points</h1>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=300"
            className="travel-image2"
          />
        </div>
        <div className="travel-banner4">
          <div className="travel-container4">
            <h1 className="travel-text07">Free Ticket to Japan</h1>
            <h1 className="travel-text08">*20000 points</h1>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=300"
            className="travel-image3"
          />
        </div>
        <div className="travel-container5">
          <div className="travel-container6">
            <div className="travel-get-started button">
              <span className="travel-text09">Get started</span>
            </div>
            <div className="travel-buttons"></div>
          </div>
          <div className="travel-book-demo button">
            <span className="travel-text10">Book a demo</span>
          </div>
        </div>
        <Link to="/redeemed" className="travel-navlink1 button">
          Redeem
        </Link>
        <Link to="/redeemed" className="travel-navlink2 button">
          Redeem
        </Link>
        <Link to="/redeemed" className="travel-navlink3 button">
          Redeem
        </Link>
        <Link to="/redeemed" className="travel-navlink4 button">
          Redeem
        </Link>
      </main>
      <span className="travel-text11">Text</span>
      <h2 className="travel-heading section-heading">Seasonal Rewards!</h2>
      <h2 className="travel-text12">
        <span className="travel-text13">
          Claim
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>Your Reward Here!</span>
      </h2>
    </div>
  )
}

export default Travel
