import React, { useLayoutEffect, useState, Suspense, lazy } from "react";
import "./App.css";
import { Header } from "./component/header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Loader from "./component/loader/Loader";
const Home = lazy(() => import("./container/home/Home"));
const WhyUs = lazy(() => import("./container/whyUs/WhyUs"));
const Ourkids = lazy(() => import("./container/ourKids/Ourkids"));
const Engage = lazy(() => import("./container/engage/Engage"));
const Donate = lazy(() => import("./container/donate/Donate"));
const CardsEngage = lazy(() => import("./component/engage/CardsEngage"));
const CardsDonate = lazy(() => import("./component/donate/CardsDonate"));
function App() {
  const [ismobile, setismobile] = useState(false);
  const [istablet, setIstablet] = useState(false);
  const IsTablet = () => {
    if (window.innerWidth <= 1024 && window.innerWidth > 650) setIstablet(true);
    else setIstablet(false);
  };
  const Ismobile = () => {
    if (window.innerWidth <= 650) setismobile(true);
    else setismobile(false);
  };
  useLayoutEffect(() => {
    Ismobile();
    window.addEventListener("resize", Ismobile);
    return () => {
      window.removeEventListener("resize", Ismobile);
    };
  }, []);
  useLayoutEffect(() => {
    IsTablet();
    window.addEventListener("resize", IsTablet);
    return () => {
      window.removeEventListener("resize", IsTablet);
    };
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Header ismobile={ismobile} />
        <Routes>
          <Route path="/" element={<Home ismobile={ismobile} />} />
          <Route path="/whyus" element={<WhyUs ismobile={ismobile} />} />
          <Route path="/ourkids" element={<Ourkids ismobile={ismobile} />} />
          <Route path="/engage" element={<Engage ismobile={ismobile} />}>
            <Route
              path="individuals"
              default
              element={<CardsEngage type="individuals" />}
            />
            <Route path="corporates" element={<CardsEngage type="corporates" />} />
            <Route path="" element={<Navigate replace to="individuals" />} />
          </Route>
          <Route path="/donate" element={<Donate ismobile={ismobile} />}>
            <Route
              path="individuals"
              default
              element={<CardsDonate type="individuals" />}
            />
            <Route path="corporates" element={<CardsDonate type="corporates" />} />
            <Route path="" element={<Navigate replace to="individuals" />} />
          </Route>
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer ismobile={ismobile} istablet={istablet} />
      </Suspense>
    </div>
  );
}

export default App;
