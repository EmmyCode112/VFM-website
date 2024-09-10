import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router basename="/VFM-website">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
