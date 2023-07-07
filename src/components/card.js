import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <section className={`card-card ${props.rootClassName} `}>
      <div className="card-icon"></div>
      <main className="card-content">
        <p className="card-description">{props.Description}</p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  Description: 'Invite Friends To Gain 100 Points',
  rootClassName: '',
  Icon: '19725557-19fc-406f-91f9-9d5288b98e01',
  IconAlt: 'image',
  Header: 'Sima Mosbacher',
}

Card.propTypes = {
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
  Icon: PropTypes.string,
  IconAlt: PropTypes.string,
  Header: PropTypes.string,
}

export default Card
