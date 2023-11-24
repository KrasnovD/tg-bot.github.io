import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <MainPage />
    </div>
  );
}

export default App;
