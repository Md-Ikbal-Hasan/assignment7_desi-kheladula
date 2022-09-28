import React from 'react';
import './Sport.css'
const Sport = ({ sport }) => {
    const { id, name, image, description, age, time } = sport

    console.log(sport);
    return (
        <div className='sport-card'>
            <img className='card-image' src={image} alt="" />
            <h4>{name}</h4>
            <p> {description} </p>
            <p>For age: {age} </p>
            <p>Time required: {time}</p>
            <button>Add to list</button>

        </div>
    );
};

export default Sport;