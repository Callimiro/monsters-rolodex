//import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from "react";
import { CardList } from './Components/card-list/card-list.js';
function App() {
/*   { name: 'Frankenstien', id: '1a' }, { name: 'Dracula', id: '2a' }, { name: 'Zombie', id: '3a' }
 */  

const [monsters,setMonsters] = useState([]);
const [searchField,setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => setMonsters(users));
  }, [])
  
  return (
    <div className="App">
      
      <input type='text' placeholder='search monster' onChange={e => setSearchField(e.target.value)}></input>
      <CardList monsters ={monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))}>
      </CardList>
      


    </div>
  );
}

export default App;
