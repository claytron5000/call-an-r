import React from 'react';
import Header from './Header';
import Member from './Member';
import sampleMembers from '../members';
import base from '../base';

class App extends React.Component {

  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.setCallTime = this.setCallTime.bind(this);

    this.state = {
      members: {}
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.params.listId}/members`, {
      context: this,
      state: 'members'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSamples() {
    this.setState({
      members: sampleMembers
    })
  }

  setCallTime(key) {
    const now = Date.now();
    // console.log(members)
    const members = {...this.state.members};
    // members[key]
    members[key].lastCallTime = now;
    this.setState({ members: members});
  }

  render() {
    return (
      <div className="grid-x">
        <Header listId={this.props.params.listId}/>
        <button onClick={this.loadSamples}>Click to Add samples</button>
        <ul>
          {
            Object
              .keys(this.state.members)
              .map(key => <Member key={key} index={key} details={this.state.members[key]} setCallTime={this.setCallTime}/>)
          }
        </ul>
      </div>
    )
  }
}

export default App;
