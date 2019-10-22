import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Routes from './Routes'
import logo from './logo.svg';
import './App.css';
const { SubMenu } = Menu;

class App extends Component {

  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
      <Router>
        <div>
        
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <Link to="/"><Icon type="mail" />Create User</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/all"><Icon type="appstore" />List Users</Link>
        </Menu.Item>
      </Menu>
        
        <main>
          <Routes />
        </main>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
