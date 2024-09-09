import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from "./components/Root";
import About from "./components/About";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Contact from "./components/Contact";


import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> } >
    <Route path='/about' element={ <About/> } />
    <Route path='/projects' element={ <Projects/> } />
    <Route path='/projects/:title' element={ <Project/> } />
    <Route path='/contact' element={ <Contact/> } />
  </Route>
));

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
