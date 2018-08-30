import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Blog from './blogList';
import BlogPostDetail from "./PostDetails"
import './App.css';

const Home = () => (<div>Hello</div>)

const PostDetails = ({ match }) => (
  <BlogPostDetail topic={match.params.topic} />
);
const CategoryComponent = ({ match }) => (
  <Blog category={match.params.category} />
);

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Route exact path='/' component={Home}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/details/:topic' component={PostDetails}/>
        <Route path='/category/:category' component={CategoryComponent}/>

      </div>
    );
  }
}

export default App;
