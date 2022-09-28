import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from "react";
import { CardList } from './Components/card-list/card-list.js';
function App() {
/*   { name: 'Frankenstien', id: '1a' }, { name: 'Dracula', id: '2a' }, { name: 'Zombie', id: '3a' }
 */  const [monsters,setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => setMonsters(users));
  }, [])
  
  return (
    <div className="App">
      
      <CardList monsters ={monsters}>
      </CardList>
      


    </div>
  );
}

export default App;
