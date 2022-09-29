import React from 'react';
import './AddBreakTime.css';

const AddBreakTime = ({ addBreakTimeToDb }) => {
    const breakTimelist = [5, 10, 15, 20, 25]
    return (
        <div>
            <h4 style={{ "marginTop": "40px", "marginBottom": "15px" }}>Add A Break</h4>
            <div className='time-container'>
                {
                    breakTimelist.map((time, index) => (
                        <button key={index} className="time-break" onClick={() => { addBreakTimeToDb(time) }} >
                            <p>{time}min</p>

                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default AddBreakTime;