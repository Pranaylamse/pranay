import React from 'react';
import profileImage from './img/Photo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello there!</h1>
      <h2>Pranay lamse</h2>
      <img  src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
