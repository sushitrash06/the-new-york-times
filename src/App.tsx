import './App.css';
import HeaderMain from './Component/Header';
import PopularComponent from './Component/Popular';
import { Router } from './routes';

function App() {
  return (
    <div className="App lg:mt-40 mt-28 lg:mx-24 md:mx-24 mx-5">
      <HeaderMain/>
      <div className='lg:flex md:flex'>
      <Router/>
      <PopularComponent/>
      </div>
    </div>
  );
}

export default App;
