import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Blog from './blogList';
import './App.css';

const Home = () => (<div>Hello</div>)


class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Route exact path='/' component={Home}/>
        <Route path='/blog' component={Blog}/>
      </div>
    );
  }
}

export default App;
