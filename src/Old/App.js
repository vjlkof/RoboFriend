import React from 'react';
import Card from './Component/Card.js';
import './App.css';
import robots from './robots.js';
 
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email[0]}></Card> */}
        <Card ></Card>
      </div>
    );
  }
}
 
export default App;
