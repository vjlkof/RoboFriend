import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardList from '../Component/CardList.js';
import Scroll from '../Component/Scroll.js';
import SearchBox from '../Component/SearchBox.js';
import 'tachyons';
import './App.css';

 


class App extends Component {
  constructor (){
    super()
    this.state ={  
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots : users }));
  }

  onSearchRobot = (event) => {
    this.setState({searchField: event.target.value}) 
  }

  render() {
    const {robots, searchField} = this.state;
    const filterRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (robots.length === 0) ?
        <h1 className='f1'>Loading</h1> :
    (
          <div className='tc'>
            <React.StrictMode>
              <h1 className='f1'>RoboFriend</h1>
              <SearchBox searchChange={this.onSearchRobot}/>
              <Scroll>
                <CardList robots= {filterRobots}/>  
              </Scroll>
            </React.StrictMode>,
          </div>
        );
    }
}
   
  export default App;