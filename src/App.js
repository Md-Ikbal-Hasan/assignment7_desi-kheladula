import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import AddBreakTime from './components/AddBreakTime/AddBreakTime';
import BreakTime from './components/BreakTime/BreakTime';

import ExerciseTime from './components/ExerciseTime/ExerciseTime';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Sport from './components/Sport/Sport';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [sports, setSports] = useState([]);
  const [exerciseTime, setExerciseTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setSports(data));
  }, [])


  const handleExerciseTime = (time) => {
    const newExerciseTime = exerciseTime + time;
    setExerciseTime(newExerciseTime);
  }

  const addBreakTimeToDb = (breakTime) => {

    localStorage.setItem('breaktime-db', breakTime);
    const updateBreakTime = localStorage.getItem('breaktime-db');
    setBreakTime(updateBreakTime);

  }

  const notify = () => toast("Wow. Assignment Completed Successfully! !");


  return (
    <div className='main-container'>

      <div className='left-side'>
        <div>
          <h1 className='club-title'>Desi Traditional Sports Club</h1>
          <h4 style={{ "margin": "25px 0" }}>Select today's exercise</h4>

          <div className='card-container'>
            {
              sports.map(sport => <Sport
                sport={sport}
                key={sport.id}
                handleExerciseTime={handleExerciseTime}
              ></Sport>)
            }
          </div>
        </div>

      </div>


      <div className='right-side'>
        <PersonalInfo></PersonalInfo>

        <h4 style={{ "marginTop": "40px", "marginBottom": "15px" }}>Add A Break</h4>
        <AddBreakTime addBreakTimeToDb={addBreakTimeToDb}></AddBreakTime>


        <h4 style={{ "marginTop": "40px", "marginBottom": "15px" }}>Exercise Details</h4>
        <ExerciseTime exerciseTime={exerciseTime}></ExerciseTime>
        <BreakTime breakTime={breakTime} ></BreakTime>

        <div>
          <button className='toast-btn' onClick={notify}>Activity Completed</button>
          <ToastContainer />
        </div>






      </div>

    </div>
  );
}

export default App;
