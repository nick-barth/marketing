import React from "react"
import "./you.css"
import potImage from "../images/you_potion.svg"

const You = () => (
  <section className="you">
    <h3 className="pricing-header">Who are you?</h3>
    <div className="you-content">
      <div className="you-box you-box--blue">
        <div className="you-text">
          You are proffessional, legit, good, and serious about esports. Your
          personalised squad website must reflect that.
        </div>
        <h4 className="you-title">Teams</h4>
        <div className="you-whitebar"></div>
      </div>
      <div className="you-box">
        <div className="you-text">
          You love content, you value your time, and you value your viewers.
          Your personalised streamer site must reflact that.
        </div>
        <h4 className="you-title">Streamers</h4>
        <div className="you-whitebar"></div>
      </div>
      <div className="you-box you-box--gold">
        <div className="you-text">
          You are organized, ambitious, and want to carve out your own space in
          esports. Your personalised organization site must reflact that.
        </div>
        <h4 className="you-title">Organisations</h4>
        <div className="you-whitebar"></div>
      </div>
    </div>
  </section>
)

export default You
