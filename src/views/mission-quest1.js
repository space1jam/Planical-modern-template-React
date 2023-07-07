import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './mission-quest1.css'

const MissionQuest1 = (props) => {
  return (
    <div className="mission-quest1-container">
      <Helmet>
        <title>MissionQuest1 - Planical modern template</title>
        <meta
          property="og:title"
          content="MissionQuest1 - Planical modern template"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name6"></Navbar>
      <section className="mission-quest1-section">
        <h2 className="mission-quest1-text">
          <span className="mission-quest1-text01">
            <span>
              Mission
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="mission-quest1-text04">To Earn Reward!</span>
        </h2>
        <div className="mission-quest1-pricing">
          <div className="mission-quest1-card">
            <div className="mission-quest1-container1">
              <span className="mission-quest1-text05">200 Points</span>
              <span className="mission-quest1-text06">Per Invite</span>
            </div>
            <span className="mission-quest1-text07">
              <span>
                Invite your friends to join the Tune Protect services by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>using your </span>
              <span>referrals code </span>
              <span>in order to gain 100 points.</span>
            </span>
            <button className="mission-quest1-button button">Learn More</button>
          </div>
        </div>
      </section>
      <section className="mission-quest1-section1">
        <header className="mission-quest1-header">
          <h2 className="mission-quest1-heading section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="mission-quest1-accordion"></main>
      </section>
      <section className="mission-quest1-section2">
        <main className="mission-quest1-content">
          <header className="mission-quest1-header1">
            <div className="mission-quest1-buttons"></div>
          </header>
          <div className="mission-quest1-card1">
            <div className="mission-quest1-container2">
              <span className="mission-quest1-text13">100 Points</span>
              <span className="mission-quest1-text14">Per 3 months</span>
            </div>
            <span className="mission-quest1-text15">
              <span className="mission-quest1-text16">
                Streak pay your monthly premium on time and gain 50
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="mission-quest1-text17"></br>
              <span className="mission-quest1-text18">
                points
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="mission-quest1-text19">every 3 </span>
              <span>months.</span>
              <br></br>
            </span>
            <button className="mission-quest1-button1 button">
              Learn More
            </button>
          </div>
          <div className="mission-quest1-card2">
            <div className="mission-quest1-container3">
              <span className="mission-quest1-text22">300 Points</span>
              <span className="mission-quest1-text23">Per Plan</span>
            </div>
            <span className="mission-quest1-text24">
              Buy a new insurance plan and gain 300 points
            </span>
            <button className="mission-quest1-button2 button">
              Learn More
            </button>
          </div>
          <div className="mission-quest1-card3">
            <div className="mission-quest1-container4">
              <span className="mission-quest1-text25">5 Points</span>
              <span className="mission-quest1-text26">Per Check-In</span>
            </div>
            <span className="mission-quest1-text27">
              <span>Check-in daily to Tune Protect app and click on the </span>
              <br></br>
              <span>check-in button to gain 5 points</span>
              <br></br>
            </span>
            <button className="mission-quest1-button3 button">
              Learn More
            </button>
          </div>
          <div className="mission-quest1-card4">
            <div className="mission-quest1-container5">
              <span className="mission-quest1-text32">1000 Points</span>
              <span className="mission-quest1-text33">Per Year</span>
            </div>
            <span className="mission-quest1-text34">
              <span>
                No claims or losses have been reported by the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>policyholder within a year and gain 1000 points</span>
            </span>
            <button className="mission-quest1-button4 button">
              Learn More
            </button>
          </div>
        </main>
      </section>
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
    </div>
  )
}

export default MissionQuest1
