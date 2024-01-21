import './App.css';
import HeaderMain from './Component/Header';
import { Router } from './routes';

function App() {
  return (
    <div className="App">
      <HeaderMain/>
      <div className='mt-40'>
      <Router/>
      </div>
    </div>
  );
}

export default App;
