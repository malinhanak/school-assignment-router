import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GET_ENTRIES from './logic/getEntries';
import BlogPostDetail from './BlogPostDetail'

class Blog extends Component {
constructor() {
  super();
  this.state = {
    posts: [],
    showPost: null
  }
}
  componentDidMount() {
    GET_ENTRIES()
    .then((blogposts) => {
      this.setState({
        posts: blogposts,
        showPost: null,
      })
    })
  }
  onClickPost(index){
    if(this.state.showPost === null) {
      this.setState({ showPost: index });
    } else {
      this.setState({ showPost: null });
    }
  }

  render() {
    const mapPosts = this.state.posts.map((entry, i) => {
        if(this.state.showPost !== null && this.state.showPost === i) {
          return (
            <section key={i} entry={entry}>
                <Link to={`/blog/topidID=${i}`}><h1>{entry.Title}</h1></Link>
                <article>{entry.Text}</article>
            </section>
          )
        } else if (this.state.showPost === null) {
          return (
            <section key={i} entry={entry}>
                <h1>{entry.Title}</h1>
                <article>{entry.Text}</article>
            </section>
          )
        } else {
          return null;
        }

    })
      return (
        <div>
          {mapPosts}
          <Route path='/blog' component={BlogPostDetail}/>
        </div>
      );
    }
  }

export default Blog;
