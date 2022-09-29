import React from 'react';
import './ExerciseTime.css'
const ExerciseTime = ({ exerciseTime }) => {
    return (
        <div>
            <h4 style={{ "marginTop": "40px", "marginBottom": "15px" }}>Exercise Details</h4>
            <div className='exercise-section'>
                <p className='exercise-time'>Exercise Time</p>
                <p> {exerciseTime} minutes </p>
            </div>

        </div>
    );
};

export default ExerciseTime;