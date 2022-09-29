import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import AddBreakTime from './components/AddBreakTime/AddBreakTime';
import BreakTime from './components/BreakTime/BreakTime';

import ExerciseTime from './components/ExerciseTime/ExerciseTime';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Sport from './components/Sport/Sport';

import QueAndAns from './components/QueAndAns/QueAndAns';


function App() {

  const [sports, setSports] = useState([]);
  const [exerciseTime, setExerciseTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  // loading the data from data.json
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setSports(data));
  }, [])


  // take the exercise time and set to state
  const handleExerciseTime = (time) => {
    const newExerciseTime = exerciseTime + time;
    setExerciseTime(newExerciseTime);
  }

  // add break time and save to local storage 
  const addBreakTimeToDb = (breakTime) => {
    localStorage.setItem('breaktime-db', breakTime);
    const updateBreakTime = localStorage.getItem('breaktime-db');
    setBreakTime(updateBreakTime);
  }

  // react toastify notification 
  const notify = () => toast("Wow. Todays Activity Completed Successfully! !");


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

          <QueAndAns></QueAndAns>

        </div>
      </div>


      <div className='right-side'>
        <PersonalInfo></PersonalInfo>
        <AddBreakTime addBreakTimeToDb={addBreakTimeToDb}></AddBreakTime>
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
