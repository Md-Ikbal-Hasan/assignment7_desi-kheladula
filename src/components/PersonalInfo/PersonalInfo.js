import React from 'react';
import './PersonalInfo.css'
const PersonalInfo = () => {
    return (
        <div>
            <div className='user'>
                <img className='user-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpLfVN1SDgl_Man8aza4DI57-2r-qnFCAXsboXMhcEQEXvfUBkue1tw4Q3hlyvQAhl9A&usqp=CAU" alt="" />
                <div>
                    <h5 style={{ "margin": '0px' }}>Mr Alex</h5>
                    <small>Dhaka, Bangladesh</small>
                </div>
            </div>
            <div className='user-information'>
                <div>
                    <h4>60<span>Kg</span></h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>5.8<span>Feet</span></h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>25<span>yrs</span></h4>
                    <p>Age</p>
                </div>
            </div>

        </div>
    );
};

export default PersonalInfo;