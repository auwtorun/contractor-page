import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ rating, profilePic, name, desc }) => {
  const validRating = Math.min(Math.max(rating, 1), 5);
  const totalStars = 5;

  return (
    <div className='flex flex-col text-primary w-full md:w-1/3 my-10'>
      <div className='mb-4'>
        {profilePic ? (
          <img src={profilePic} alt={`${name}'s profile`} className='w-16 h-16 rounded-full object-cover' />
        ) : (
          <FaUserCircle size="64" />
        )}
      </div>
      <h1 className='text-lg font-bold mb-4'>
        {name}
      </h1>
      <div className='flex flex-row mb-4 gap-x-1'>
        {Array.from({ length: totalStars }).map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={index < validRating ? faStarSolid : faStarRegular}
            size="lg"
          />
        ))}
      </div>
      <p className='mb-4'>
        {desc}
      </p>
    </div>
  );
}

export default Rating;
