import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Sport from './components/Sport/Sport';

function App() {

  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch('fakedb.json')
      .then(res => res.json())
      .then(data => setSports(data));
  }, [])

  // console.log(sports);


  return (
    <div className='main-container'>

      <div className='left-side'>

        <div>
          <h1 className='club-title'>Desi Traditional Sports Club</h1>
          <div className='card-container'>
            {
              sports.map(sport => <Sport sport={sport} key={sport.id}></Sport>)
            }
          </div>
        </div>



      </div>

      <div className='right-side'>
        <p>Functional side</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ad quidem repellendus iure eum veritatis sint. Saepe similique aliquid deleniti corporis consequatur qui alias iusto in sequi ipsum! Eaque voluptas aliquid nobis rerum quos explicabo nostrum itaque placeat expedita architecto doloribus cum molestiae ex ad, ipsum recusandae, ut tempore pariatur.</p>

      </div>

    </div>
  );
}

export default App;
