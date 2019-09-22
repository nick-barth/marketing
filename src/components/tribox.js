import React from "react"
import "./tribox.css"

const Tribox = ({ title, image, text, subtitle }) => (
  <div className="tribox">
    <div className="tribox__parro" />
    <div className="tribox__image-bubble">
      <img className="tribox__image-src" src={image} alt={title} />
    </div>
    <span className="tribox__subtitle">{subtitle}</span>
    <h3 className="tribox__title">{title}</h3>
    <p className="tribox__text">{text}</p>
  </div>
)

export default Tribox
