import React from 'react';

function Card({ imgSrc, imgAlt, title, description, link }) {
  return (
    <div className="card">
      <img src= {imgSrc} alt= {imgAlt} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} className="button">{title}</a>
    </div>
  );
}

export default Card;
