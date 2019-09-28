import React from "react"
import Pattern from "../images/pattern.jpg"
import Button from "./button"
import "./pricing.css"

const Pricing = () => (
  <>
    <h3 id="pricing" className="pricing-header">
      Pricing
    </h3>
    <div style={{ backgroundImage: `url(${Pattern})` }} className="pricing">
      <div className="pricingBox">
        <div className="pricingTitle">Basic</div>
        <div className="pricingSubtitle">Check us out!</div>
        <div className="pricingPricecontainer">
          <div className="pricingPrice">
            <div className="pricingPriceContent pricingPriceContent--contact">
              Free
            </div>
          </div>
          <div className="billingPeriod">/forever</div>
        </div>
        <div className="pricingFeatures">
          <ul className="featuresList">
            <li className="feature">Beatuiful and efficient website</li>
            <li className="feature">Mess around, figure yourself out</li>
          </ul>
          <div className="pricingSignup">
            <a href="https://app.burst.gg/">
              <Button color="blue"> Get Started </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="pricingBox pricingBox--purple">
        <div className="pricingTitle">Live</div>
        <div className="pricingSubtitle">We want to get known</div>
        <div className="pricingPricecontainer">
          <div className="pricingPrice">
            <div className="pricingPriceContent">
              $13 <span className="pricingCents">99</span>
            </div>
          </div>
          <div className="billingPeriod">/month</div>
        </div>
        <div className="pricingFeatures">
          <ul className="featuresList">
            <li className="feature">Beatuiful and efficient website</li>
            <li className="feature">Domain, hosting, design, handled by us</li>
            <li className="feature">Analytics and customisation</li>
            <li className="feature">Search engine optimisation</li>
          </ul>
          <div className="pricingSignup">
            <Button> Get Started </Button>
          </div>
        </div>
      </div>
      <div className="pricingBox pricingBox--gold">
        <div className="pricingTitle">Agency</div>
        <div className="pricingSubtitle">We're now on your team</div>
        <div className="pricingPricecontainer">
          <div className="pricingPrice">
            <div className="pricingPriceContent pricingPriceContent--contact">
              Contact us
            </div>
          </div>
          <div className="billingPeriod">/contract</div>
        </div>
        <div className="pricingFeatures">
          <ul className="featuresList">
            <li className="feature">Beatuiful and efficient website</li>
            <li className="feature">Domain, hosting, design, handled by us</li>
            <li className="feature">Analytics and customisation</li>
            <li className="feature">Search engine optimisation</li>
            <li className="feature">Personalised Agency Services</li>
            <li className="feature">Finding Sponsorships, finding teams</li>
            <li className="feature">In depth support</li>
          </ul>
          <div className="pricingSignup">
            <Button color="yellow"> Get in touch </Button>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Pricing
