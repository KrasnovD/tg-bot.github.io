import React, { useState } from 'react';
import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import MainPage from "./components/MainPage/MainPage";

function App() {
  const [title] = useState("SLEEPCOIN");
  return (
    <div className="App">
      <NavMenu title={title}/>
      <MainPage />
    </div>
  );
}

export default App;
