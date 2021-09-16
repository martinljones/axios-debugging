import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import {getAgeByName} from "./services/ageApi";

function App() {
  const [currentNameInfo, setCurrentNameInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setCurrentNameInfo(await getAgeByName());
    setIsLoading(false);
  }, [])

  if(isLoading) {
    return (
        <h1>We Loading</h1>
    )
  }
  console.log(currentNameInfo)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {currentNameInfo.name} is {currentNameInfo.age}
        </p>
      </header>
    </div>
  );
}

export default App;
