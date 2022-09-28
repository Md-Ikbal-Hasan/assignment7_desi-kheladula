import React from 'react';
import './AddBreakTime.css';

const AddBreakTime = ({ addBreakTimeToDb }) => {
    const breakTimelist = [5, 10, 15, 20, 25]
    return (
        <div className='time-container'>
            {
                breakTimelist.map((time, index) => (
                    <button key={index} className="time-break" onClick={() => { addBreakTimeToDb(time) }} >
                        <p>{time}min</p>

                    </button>
                ))
            }

        </div>
    );
};

export default AddBreakTime;