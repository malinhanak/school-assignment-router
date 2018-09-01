import React, { Component } from 'react';
import GET_ENTRIES from './logic/getEntries';
import { Link } from 'react-router-dom';
import CategoryList from './Categories';
import Pagination from './pagination';


class Blog extends Component {
constructor() {
  super();
  this.state = {
    posts: [],
    total: null
  }
}

getEntries(page){
   const cat = this.props.category;
    GET_ENTRIES(cat, page)
    .then((blogposts) => {
      this.setState({
        posts: blogposts.entries,
        total: blogposts.total,
      })
    })
}


  componentDidMount() {
   this.getEntries()
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
        <div>
          <main>
            <div id="Blogpost">
              {mapPosts}
            </div>
            <aside><CategoryList /></aside>
          </main>
          <Pagination getEntries={(page) => this.getEntries(page)} total={this.state.total}  />
        </div>
      );
    }
  }

export default Blog;
