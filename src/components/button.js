import React from "react"
import "./button.css"

const Button = ({ children, color }) => (
  <button className={`button button--${color}`}>{children}</button>
)

export default Button
