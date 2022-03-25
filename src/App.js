import React from 'react';
import Clock from './components/Clock';

import './styles/reset.css';
import './styles/styles.scss'

class App extends React.Component {
  state = {
    deadline: 'September 16, 2022',
    newDeadline: '',
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline,
    })
  }
  
  render() {
    const { deadline } = this.state;

    return (

      <div className="container">
        <div className="title">Deadline counter</div>
        <h1>Number of days until {deadline}</h1>
        <Clock deadline={this.state.deadline} />
        <input 
          placeholder="Enter a new date"
          type="text"
          className="input"
          onChange={(evt) => {
            this.setState({newDeadline: evt.target.value})
          }}
        />
        <button 
          className="button"
          onClick={() => this.changeDeadline()}
        >Submit</button>
      </div>

    );

  } 
  

}

export default App;
