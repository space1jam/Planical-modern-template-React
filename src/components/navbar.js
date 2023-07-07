import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <img
        alt={props.pastedImage_alt}
        src={props.pastedImage_src}
        className="navbar-pasted-image"
      />
      <img
        alt={props.pastedImage_alt1}
        src={props.pastedImage_src1}
        className="navbar-pasted-image1"
      />
      <div className="navbar-nav-links">
        <span className="navbar-link nav-link">Home</span>
        <span className="navbar-link1 nav-link">Claim</span>
        <Link to="/claim-reward" className="navbar-link2 nav-link">
          Rewards
        </Link>
        <span className="navbar-link3 nav-link">Insurance</span>
      </div>
      <div className="navbar-nav-content">
        <div className="navbar-get-started get-started">
          <span className="navbar-text">Buy Now</span>
        </div>
        <div id="open-mobile-menu" className="navbar-hamburger get-started">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile-menu">
        <div className="navbar-branding">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="navbar-image1"
          />
          <div id="close-mobile-menu" className="navbar-container">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="navbar-nav-links1">
          <span className="nav-link">Features</span>
          <span className="nav-link">Why us</span>
          <span className="nav-link">Prices</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="get-started">
          <span className="navbar-text1">Get started</span>
        </div>
      </div>
      <div className="">
        <Script
          html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
          className=""
        ></Script>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  image_alt: 'image',
  image_src1: '/Branding/planical7012-ttpb.svg',
  image_src: '/Icons/hamburger-200h.png',
  pastedImage_alt1: 'pastedImage',
  image_alt1: 'image',
  pastedImage_src1: '/external/pastedimage-c3dv-200h.png',
  pastedImage_alt: 'pastedImage',
  rootClassName: '',
  pastedImage_src: '/external/pastedimage-c3dv-200h.png',
  BrandingLogo:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08e9141c-e9e9-4d51-994d-22f260b21c68/0f4ac702-51a5-4a68-8182-06e3f427edb8?org_if_sml=14251',
}

Navbar.propTypes = {
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  image_alt1: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_src: PropTypes.string,
  BrandingLogo: PropTypes.string,
}

export default Navbar
