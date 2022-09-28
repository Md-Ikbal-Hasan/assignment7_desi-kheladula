import React from 'react';
import './Sport.css'
const Sport = ({ sport, handleExerciseTime }) => {
    const { id, name, image, description, age, time } = sport

    // console.log(sport);
    return (
        <div className='sport-card'>
            <img className='card-image' src={image} alt="" />
            <h4 className='sport-name'>{name}</h4>
            <p> {description} </p>
            <p className='age'>For age: <b>{age}</b> </p>
            <p className='time'>Time required: <b>{time} minutes</b> </p>
            <button onClick={() => handleExerciseTime(parseInt(time))} className='card-btn'>Add to list</button>

        </div>
    );
};

export default Sport;