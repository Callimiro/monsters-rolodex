//import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from "react";
import { CardList } from './Components/card-list/card-list.js';
import {SearchBox } from './Components/search-box/search-box.js'; 
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
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='search monster' handleChange={e => setSearchField(e.target.value)}></SearchBox>
      <CardList monsters ={monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))}>
      </CardList>
      


    </div>
  );
}

export default App;
