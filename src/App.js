import React from 'react';
import Navbar from './Navbar';
import {Routes, Route, NavLink} from "react-router-dom";

const Home = () => {
    return (
        <>
          <Navbar/>
          <section>
              <p>Welcome to</p>
              <h1>Sumit Nain</h1>
          </section>
        </>
    )
};

const About = () => {
    return (
        <>
          <Navbar/>
          <section>
              <p>Welcome to</p>
              <h1>My About Page</h1>
          </section>
        </>
    )
};

const Service = () => {
    return (
        <>
          <Navbar/>
          <section>
              <p>Welcome to</p>
              <h1>My Service Page</h1>
          </section>
        </>
    )
};

const Contact = () => {
    return (
        <>
          <Navbar/>
          <section>
              <p>Welcome to</p>
              <h1>My Contact Page</h1>
          </section>
        </>
    )
};

const App = () => {
    return (
        <>
           <Routes>
               <Route exect path='/' element={<Home/> }  />
               <Route path='/about' element={<About/> } />
               <Route path='/service' element={<Service/> } />
               <Route path='/contact' element={<Contact/> } />
           </Routes>
        </>
    )
};

export default App;
