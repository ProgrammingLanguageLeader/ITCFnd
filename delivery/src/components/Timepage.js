import React from 'react';

import LeadText from './LeadText';

class Timepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <LeadText>{ this.state.date.toLocaleTimeString() }</LeadText>
      </div>
    );
  }
}

export default Timepage;