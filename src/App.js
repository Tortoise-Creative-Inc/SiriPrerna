import './App.css';
import { Headermob } from './component/header/Headermob';
import { Footermob } from './component/footer/Footermob';
import { Route, Routes } from 'react-router-dom';
import { Home } from './container/home/Home';

function App() {
  return (
    <div className="App">
      <Headermob/>
      <Routes>
        <Route path="/"  element={<Home/>} />
      </Routes>
      <Footermob/>     
    </div>
  );
}

export default App;
