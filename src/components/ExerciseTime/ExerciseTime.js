import React from 'react';
import './ExerciseTime.css'
const ExerciseTime = ({ exerciseTime }) => {
    return (
        <div>
            <div className='exercise-section'>
                <p className='exercise-time'>Exercise Time</p>
                <p> {exerciseTime} minutes </p>
            </div>

        </div>
    );
};

export default ExerciseTime;