import React, { useLayoutEffect, useState } from 'react';
import './App.css';
import { Headermob } from './component/header/Headermob';
import { Route, Routes , Navigate } from "react-router-dom";
import { Home } from './container/home/Home';
import WhyUs from './container/WhyUs/WhyUs';
import { Ourkids } from './container/OurKids/Ourkids';
import { Engage } from './container/Engage/Engage';
import Footer from './component/footer/Footer';


function App() {
  const [ismobile, setismobile] = useState(false)
  const [istablet, setIstablet] = useState(false)
  const IsTablet = () => {
    if ((window.innerWidth) <= 1024 && (window.innerWidth > 650)) setIstablet(true);
    else setIstablet(false);
  }
  console.log(istablet);
  const Ismobile = () => {
    if (window.innerWidth <= 650) setismobile(true);
    else setismobile(false);
    console.log(window.innerWidth)
  };
  console.log(ismobile);
  useLayoutEffect(() => {
    Ismobile();
    window.addEventListener('resize', Ismobile)
    return () => {
      window.removeEventListener('resize', Ismobile)
    }
  }, [])
  useLayoutEffect(() => {
    IsTablet();
    window.addEventListener('resize', IsTablet)
    return () => {
      window.removeEventListener('resize', IsTablet)
    }
  }, [])

  return (
    <div className="App">
      <Headermob ismobile={ismobile} />
      <Routes>
        <Route path="/" element={<Home ismobile={ismobile} />} />
        <Route path="/whyus" element={<WhyUs ismobile={ismobile} />} />
        <Route path="/ourkids" element={<Ourkids ismobile={ismobile} />} />
        <Route path="/engage" element={<Engage ismobile={ismobile} />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer ismobile={ismobile} istablet={istablet} />
    </div>
  );
}

export default App;
