import React, {Component} from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom'
import '../styles.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      passwordStatus: false
    }
  }
  changePassword(event) {
    const { value } = event.target;
    this.setState({password: value});
  }
  login() {
    if(this.state.username && (this.state.password).match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)) {
      this.props.redirectPage('DashBoard');
    }
  }
  render() {
    return (
      <div className="container">
        <Header title="Welcome"/>
        <div>
          <div className="inputDiv" style={{marginTop: 50}}>
            <input className="inputText" placeholder="Username" onChange={(event)=>{this.setState({username: event.target.value})}}/>
          </div>
          <div className="inputDiv">
            <input className="inputText" placeholder="Password" onChange={this.changePassword.bind(this)} type="password"/>
          </div>
          <div style={{marginTop: 30}}>
            <button className="button" onClick={this.login.bind(this)}>
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }
}
