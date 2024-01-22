import './App.css';
import HeaderMain from './Component/Header';
import PopularComponent from './Component/Popular';
import { Router } from './routes';

function App() {
  return (
    <div className="App mt-40 mx-24">
      <HeaderMain/>
      <div className='flex'>
      <Router/>
      <PopularComponent/>
      </div>
    </div>
  );
}

export default App;
