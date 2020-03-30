import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar.component';
import Home from './components/pages/home/home.component';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
