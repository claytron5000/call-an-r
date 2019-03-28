import React from 'react';
import {redToGreen} from '../helpers';

class Member extends React.Component {

  componentWillUpdate() {
    let color = redToGreen(3600000);
    if (typeof this.props.details.lastCallTime !== 'undefined') {
      color = redToGreen(Date.now() - this.props.details.lastCallTime);
    }
    console.log(color);
  }

  render() {
    const details = this.props.details;
    let color = '';

    return (
      <li className="primary" style={{backgroundColor:color}}>
        <span>{details.Name}</span>&nbsp;
        <span>{details.District}</span>&nbsp;
        <a onClick={()=>{this.props.setCallTime(this.props.index)}} className="button" href={`tel:${details.dcPhone}`}>{details.dcPhone}</a>
      </li>
    )
  }
}

export default Member;
