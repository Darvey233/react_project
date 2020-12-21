import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Businesses from './components/BusinessList/BusinessList';
import BusinessList from './components/BusinessList/BusinessList';
// import people from './people.json';

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <div className="App">
      <h1>heading</h1>
      {people.map((person) => (
        <>
          <p>{person.name}</p>
          <p>{person.age}</p>
        </>
      ))}
      <SearchBar />
      <BusinessList />
    </div>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>ravenous</h1>
//         <SearchBar />
//         <BusinessList />
//       </div>
//     );
//   }
// }

export default App;
