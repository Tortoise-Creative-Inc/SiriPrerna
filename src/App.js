import './App.css';
import { Headermob } from './component/header/Headermob';
import { Footermob } from './component/footer/Footermob';
import { Route, Routes } from 'react-router-dom';
import { Home } from './container/home/Home';
import { WhyUs } from './container/WhyUs/WhyUs';
import { Ourkids } from './container/OurKids/Ourkids';
import { Engage } from './container/Engage/Engage';
import { useEffect, useState } from 'react';
import Footer from './component/footer/Footer';


function App() {
  const [ismobile,setismobile] = useState(true)

  useEffect(() => {
    const Ismobile = ()=>{
      if(window.innerWidth<=360)setismobile(true);
      else if(window.innerWidth>360) setismobile(false); 
    };
    window.addEventListener('resize',Ismobile)
    return () => {
      window.removeEventListener('resize',Ismobile)
    }
  }, [ismobile])

  return (
    <div className="App">
      <Headermob/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/whyus"  element={<WhyUs ismobile={ismobile}/>} />
        <Route path="/ourkids"  element={<Ourkids ismobile={ismobile}/>} />
        <Route path="/engage"  element={<Engage ismobile={ismobile}/>} />   
      </Routes>
      <Footermob />     
    </div>
  );
}

export default App;
