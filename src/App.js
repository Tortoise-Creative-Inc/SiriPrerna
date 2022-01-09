import './App.css';
import { Headermob } from './component/header/Headermob';
import { Footermob } from './component/footer/Footermob';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './container/Layout';

function App() {
  return (
    <div className="App">
      <Headermob/>
      <Routes>
        <Route path="/"  element={<Layout/>} />
      </Routes>
      <Footermob/>     
    </div>
  );
}

export default App;
