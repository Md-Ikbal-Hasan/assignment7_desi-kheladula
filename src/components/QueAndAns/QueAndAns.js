import React from 'react';
import './QueAndAns.css'
const QueAndAns = () => {
    return (
        <div>
            <h3 style={{ "marginTop": "40px" }}>Question and Answer Session</h3>
            <div>
                <h4 className='que'>How does react works?</h4>
                <p className='ans'>React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element</p>
            </div>

            <div>
                <h4 className='que'>Difference between props and state.</h4>
                <p className='ans'>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
            </div>

            <div>
                <h4 className='que'>Usages of useEffect</h4>
                <p className='ans'>If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.For therse type of side effect useEffect are used.</p>
            </div>
        </div>
    );
};

export default QueAndAns;