import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './personalized.css'

const Personalized = (props) => {
  return (
    <div className="personalized-container">
      <Helmet>
        <title>personalized - Planical modern template</title>
        <meta
          property="og:title"
          content="personalized - Planical modern template"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name11"></Navbar>
      <h2 className="personalized-text">
        <span className="personalized-text1">
          Personalize
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>your own reward!</span>
      </h2>
      <h2 className="personalized-text3">
        You can personalize your own reward here and can redeem it at anytime
        when you have enough points to claim it. 
      </h2>
      <select id="Marital Status" className="personalized-select">
        <option value="Marital status" selected>
          Single
        </option>
        <option value="Marital status">Married</option>
      </select>
      <select id="occupation" className="personalized-select1">
        <option value="option1" selected>
          Finance
        </option>
        <option value="option3">Public Relation</option>
        <option value="option2">Marketing</option>
        <option value="option4">Art</option>
        <option value="option5">Business</option>
        <option value="option6">Enginerring</option>
        <option value="option7">Education</option>
        <option value="option8">Medical</option>
        <option value="option9">Tourism</option>
        <option value="option10">Computer Science</option>
        <option value="option11">Law</option>
        <option value="option12">Manufacturing</option>
        <option value="option13">Logistic</option>
        <option value="option14">Professional Services</option>
        <option value="option15">Others</option>
      </select>
      <select id="occupation" className="personalized-select2">
        <option value="option1" selected>
          Cooking
        </option>
        <option value="Option 1">Photography</option>
        <option value="option2">Designing</option>
        <option value="option3">Fitness</option>
        <option value="Option 2">Travel</option>
        <option value="option4">Gaming</option>
        <option value="Option 3">Fashion/style</option>
        <option value="option5">\Watchig movies</option>
      </select>
      <span className="personalized-text4">Marital Status</span>
      <span className="personalized-text5">Occupation Field</span>
      <span className="personalized-text6">Hobby</span>
      <span className="personalized-text7">
        Please help us to fill these following information to give you
        recommendation on your reward.
      </span>
    </div>
  )
}

export default Personalized
