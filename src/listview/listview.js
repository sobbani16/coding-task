import React, {Component} from 'react';
import ListRow from './list';
import Header from '../header/header';
import diamondImg from '../assets/download.jpg';
import '../styles.css';

const listData = [
  {title: 'Example 1', img: diamondImg},
  {title: 'Example 2', img: diamondImg},
  {title: 'Example 3', img: diamondImg},
  {title: 'Example 4', img: diamondImg},
  {title: 'Example 5', img: diamondImg},
  {title: 'Example 6', img: diamondImg},
  {title: 'Example 7', img: diamondImg},
  {title: 'Example 8', img: diamondImg}
]

export default class ListView extends Component {
  removeItem(index) {
    listData.splice(index, 1);
  }
  render() {
    return (
      <div className="container">
        <Header title="List View" backButton redirectPage={this.props.redirectPage} to="Login"/>
        <ListRow content={listData} removeItem={this.removeItem.bind(this)}/>
      </div>
    )
  }
}
