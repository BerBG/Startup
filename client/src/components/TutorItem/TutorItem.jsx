import React from 'react';
import './TutorItem.css';
import { assets } from '../../assets/assets.js';

const TutorItem = ({ id, name, image, hour, description }) => {
  return (
    <div className='tutor-item'>
      <div className="tutor-item-img-container">
        <img className='tutor-item-image' src={image} alt={name} />
      </div>
      <div className="tutor-item-info">
        <div className="tutor-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="Rating stars" />
        </div>
        <div className="description-wrapper">
          <p className='tutor-item-desc'>{description}</p>
        </div>
        <div className="bottom-info">
          <p className="tutor-item-hour">R${hour}</p>
          <button className="call-button">Call Tutor</button>
        </div>
      </div>
    </div>
  );
}

export default TutorItem;
