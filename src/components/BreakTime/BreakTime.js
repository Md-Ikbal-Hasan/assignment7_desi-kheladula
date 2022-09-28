import React from 'react';
import './BreakTime.css'
const BreakTime = ({ breakTime }) => {
    const time = localStorage.getItem('breaktime-db')
    return (
        <div>
            <div className='break-time-section'>
                <p className='exercise-time'>Break Time</p>
                <p>{time} minutes </p>
            </div>

        </div>
    );
};

export default BreakTime;