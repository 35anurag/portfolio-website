import React from 'react'
import "./Card.css";

const Card = ({img, heading}) => {
  return (
    <div className="card">
    <img src={img} alt="" />
    <span>{heading}</span>
    </div>
  )
}

export default Card