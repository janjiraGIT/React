import React, { useState } from 'react';
import Header from "./components/Header"
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Tweet from './Tweet';

function App() {
  const [users, setUsers] = useState([
    { name: "Janjira", message: "Sover" },
    { name: "Joakim", message: "Puttar" },
    { name: "Benjamin", message: "Godis" },
    { name: "Bambu", message: "Vov Vov" },
  ]);


  return (
    
    <div className="app">
      <Header/>
      <MainContent/>
      <Footer/>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>

  );
}

export default App;