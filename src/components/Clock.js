import React from 'react';

class Clock extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }  

  UNSAFE_componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({
      days,
      hours,
      minutes,
      seconds,
    })
  }

  render() {
    return (
      <h2>
        <div className="clock">{this.leading0(this.state.days)} days, </div>
        <div className="clock">{this.leading0(this.state.hours)} hours, </div>
        <div className="clock">{this.leading0(this.state.minutes)} minutes, </div>
        <div className="clock">{this.leading0(this.state.seconds)} seconds </div>

           
      </h2>
    )
  }
}

export default Clock;
