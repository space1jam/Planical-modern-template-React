import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Mark from '../components/mark'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  <span className="home-text">
                    Introducing
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="home-text01"></br>
                  <span className="home-text02">
                    Tune Protect Reward System
                  </span>
                  <br></br>
                </h1>
              </header>
              <Link to="/claim-reward" className="home-navlink">
                <div className="home-get-started button">
                  <span className="home-text04">View Rewards</span>
                </div>
              </Link>
              <div className="home-buttons"></div>
            </main>
            <div className="home-highlight"></div>
          </div>
          <div className="home-image">
            <img
              alt="pastedImage"
              src="/external/pastedimage-qccvp-200h.png"
              className="home-pasted-image"
            />
            <img
              alt="image"
              src="/SectionImages/heroimage-600w.png"
              className="home-image1"
            />
            <img
              alt="pastedImage"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/97ca4bb2-e098-4f52-9513-f95b62f48f4a/2ef2d283-566b-4b8a-852f-955dba8072c7?org_if_sml=1554665"
            />
          </div>
        </div>
      </section>
      <section className="home-section01">
        <h2 className="home-text05">Tiered Reward System</h2>
        <div className="home-note">
          <div className="home-content1">
            <main className="home-main1">
              <h2 className="home-heading1">
                Accessing this Medicare benefit is easy
              </h2>
              <p className="home-paragraph">
                <span>
                  At our insurance company, we have implemented a tiered reward
                  system on our website to enhance your experience and show our
                  appreciation for your loyalty. This system allows us to
                  recognize and reward our valued customers at different levels
                  based on their engagement and commitment.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  By offering tiered rewards, we aim to provide you with
                  exclusive benefits, personalized services, and enhanced
                  privileges that align with your level of membership. Whether
                  you&apos;re a Diamond, Gold, Silver, or Bronze member, we want
                  to ensure that you receive the highest level of satisfaction
                  and enjoy a range of perks that cater to your specific needs.
                  This tiered reward system serves as a way for us to express
                  our gratitude for your trust and continued support, fostering
                  a stronger relationship between us and making your insurance
                  journey even more rewarding.
                </span>
              </p>
            </main>
            <div className="home-explore-more">
              <p className="home-text10">
                <span>
                  Explore
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  more
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>-</span>
                <span>&gt;</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section02">
        <section className="home-section03">
          <section className="home-note1">
            <div className="home-image2">
              <img
                alt="pastedImage"
                src="/external/pastedimage-t0ye-500h.png"
                className="home-pasted-image2"
              />
            </div>
            <div className="home-content2">
              <main className="home-main2">
                <header className="home-caption">
                  <span className="home-section04 section-head">
                    DIAMOND TIER
                  </span>
                </header>
                <main className="home-heading2">
                  <header className="home-header1">
                    <p className="home-paragraph1 section-description">
                      <span>
                        Our Diamond Tier member enjoy the highest level of
                        prestige with exclusive perks, personalized services,
                        priority access, and unparalleled benefits.
                      </span>
                      <br></br>
                      <span className="home-text17">Min. 50,000 points</span>
                      <span> </span>
                    </p>
                  </header>
                  <div className="home-checkmarks">
                    <Mark></Mark>
                    <Mark Label="Exclusive gifts"></Mark>
                    <Mark Label="Priority Customer Support"></Mark>
                  </div>
                </main>
              </main>
            </div>
          </section>
          <img
            alt="pastedImage"
            src="/external/pastedimage-c3dv-200h.png"
            className="home-pasted-image3"
          />
        </section>
        <section className="home-section05">
          <section className="home-note2">
            <div className="home-container1">
              <div className="home-content3">
                <main className="home-main3">
                  <span className="home-section06 section-head">Gold TIER</span>
                  <div className="home-container2">
                    <header className="home-caption1"></header>
                    <p className="home-paragraph2 section-description">
                      <span>
                        Experience the luxury of elevated privileges, tailored
                        assistance, enhanced rewards, and priority treatment as
                        a valued Gold member.
                      </span>
                      <br className="home-text20"></br>
                      <span className="home-text21">Min. 50,000 points</span>
                      <span> </span>
                    </p>
                  </div>
                  <main className="home-heading3">
                    <header className="home-header2"></header>
                    <div className="home-checkmarks1">
                      <Mark Label="2x Point Multiplier"></Mark>
                      <Mark Label="Gold Seasonal Gifts"></Mark>
                    </div>
                  </main>
                </main>
              </div>
            </div>
            <img
              alt="pastedImage"
              src="/external/pastedimage-47hr-1200w.jpeg"
              className="home-pasted-image4"
            />
          </section>
        </section>
        <section className="home-section07">
          <section className="home-note3">
            <div className="home-image3">
              <img
                alt="pastedImage"
                src="/external/pastedimage-mmve-1200w.jpeg"
              />
            </div>
            <div className="home-content4">
              <main className="home-main4">
                <header className="home-caption2">
                  <span className="home-section08 section-head">
                    SILVER TIER
                  </span>
                </header>
                <main className="home-heading4">
                  <header className="home-header3">
                    <p className="home-paragraph3 section-description">
                      Unlock a world of premium advantages, priority services,
                      bonus rewards, and special offerings tailored for our
                      esteemed Silver members.
                    </p>
                  </header>
                  <div className="home-checkmarks2">
                    <Mark Label="1.5x Point Multiplier"></Mark>
                    <Mark Label="Silver Seasonal Gifts"></Mark>
                  </div>
                </main>
              </main>
            </div>
          </section>
        </section>
        <div className="home-container3">
          <img
            alt="pastedImage"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/97ca4bb2-e098-4f52-9513-f95b62f48f4a/b68ee65d-b238-474e-b057-a19c4deae920?org_if_sml=1&amp;q=8011614"
          />
          <section className="home-section09">
            <header className="home-header4">
              <h2 className="home-text23">
                Why do you need a mobile medical app?
              </h2>
              <span className="home-section10 section-head">bronze TIER</span>
            </header>
            <section className="home-note4">
              <div className="home-content5">
                <main className="home-main5">
                  <header className="home-caption3"></header>
                  <main className="home-heading5">
                    <header className="home-header5">
                      <p className="home-paragraph4 section-description">
                        Begin your journey with us and enjoy access to essential
                        benefits, rewards, and member-exclusive features as a
                        valued Bronze member.
                      </p>
                    </header>
                    <div className="home-checkmarks3">
                      <Mark Label="Claim Rewards"></Mark>
                    </div>
                  </main>
                </main>
                <Link to="/mission-quest1" className="home-navlink1">
                  <div className="home-get-started1 button">
                    <span className="home-text24">Go to Mission!</span>
                  </div>
                </Link>
              </div>
            </section>
          </section>
        </div>
      </section>
      <footer className="home-footer">
        <h1 className="home-notice">
          By subscribing to our newsletter you agree with our Terms and
          Conditions.
        </h1>
        <div className="home-content6">
          <main className="home-main-content">
            <div className="home-content7">
              <header className="home-main6">
                <div className="home-header6">
                  <img
                    alt="image"
                    src="/Branding/planical7012-ttpb.svg"
                    className="home-branding"
                  />
                  <span className="home-text25">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <img
                      alt="image"
                      src="/Icons/linkedin-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <img
                      alt="image"
                      src="/Icons/instagram-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category">
                  <div className="home-header7">
                    <span className="footer-header">Solutions</span>
                  </div>
                </div>
                <div className="home-category1">
                  <div className="home-header8">
                    <span className="footer-header">Company</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright">
              <span className="home-text28">
                © 2023 Parkhillers. All Rights Reserved.
              </span>
            </section>
          </main>
          <div className="home-container4">
            <div className="home-container5">
              <div className="home-container6">
                <div className="home-container7">
                  <main className="home-subscribe">
                    <main className="home-main7"></main>
                  </main>
                  <div className="home-input-field">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="home-textinput input"
                    />
                    <div className="home-buy button">
                      <span className="home-text29">-&gt;</span>
                      <span className="home-text30">
                        <span>Subscribe now</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="home-copyright1">
            <span className="home-text33">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <Script
          html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
        ></Script>
      </div>
      <span className="home-text34">.</span>
      <span className="home-text35">.</span>
      <span className="home-text36">.</span>
      <span className="home-text37">.</span>
    </div>
  )
}

export default Home
