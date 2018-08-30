import React, { Component } from 'react';
import GET_ENTRIES from './logic/getEntries';
import { Link } from 'react-router-dom';
import CategoryList from './Categories';


class Blog extends Component {
constructor() {
  super();
  this.state = {
    posts: [],
    showPost: null
  }
}
  componentDidMount() {
    const cat = this.props.category;
    GET_ENTRIES(cat)
    .then((blogposts) => {
      this.setState({
        posts: blogposts,
      })
    })
  }

  render() {
    const mapPosts = this.state.posts.map((entry, i) => {
        return (
            <section key={i}>
                <Link to={`/details/${i}`}><h1>{entry.Title}</h1></Link>
                <article>{entry.Entry}</article>
            </section>
          )
    })
      return (
        <main>
          <div id="Blogpost">
            {mapPosts}
          </div>
          <aside><CategoryList /></aside>
        </main>
        
      );
    }
  }

export default Blog;
