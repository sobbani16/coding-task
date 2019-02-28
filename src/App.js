import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login.js';
import ListView from './listview/listview.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    componentToShow: <Login redirectPage={this.redirectPage.bind(this)}/>
  }
  redirectPage(to) {
    switch(to) {
      case 'Login': this.setState({componentToShow: <Login redirectPage={this.redirectPage.bind(this)}/>}); break;
      case 'DashBoard': this.setState({componentToShow: <ListView redirectPage={this.redirectPage.bind(this)}/>}); break;
    }
  }
  render() {
    return (
      <div>
        {this.state.componentToShow}
      </div>
    );
  }
}

export default App;
