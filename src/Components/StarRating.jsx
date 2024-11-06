import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfAlt, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  
  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {

      stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="text-yellow-500" />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-500" />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={regularStar} className="text-gray-400" />);
    }
  }

  return <div className="flex space-x-1">{stars}</div>;
};

export default StarRating;
