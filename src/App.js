import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutMe from './Components/AboutMe/AboutMe'
import ToolsTecnologies from './Components/Tecnologies/Tecnologies'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe />} exact />  
        <Route path="/tecnologies" element={<ToolsTecnologies />} exact />    
        <Route path="/contact" element={<Contact />} exact />    
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
