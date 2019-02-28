import React, {Component} from 'react';
import '../styles.css';
import arrow from '../assets/arrows.svg';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={arrow} className="backarrow" onClick={()=>{this.props.redirectPage && this.props.redirectPage(this.props.to)}}/>
        <h3 className="textCenterTitle">
          {this.props.title}
        </h3>
      </div>
    )
  }
}
