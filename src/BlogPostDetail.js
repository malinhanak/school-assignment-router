import React, { Component } from 'react';
class BlogPostDetail extends Component {
  constructor(props){
    super(props);
  }

  render() {
      const post = this.props.entry;
      console.log(post);
      return (
          <section>
              <h1>{this.state.props.entry.Title}</h1>
              <section>
                  <span><strong>Författare:</strong> {this.state.props.entry.Author} | <strong>Datum:</strong> {this.state.props.entry.Date}</span>
              </section>
              <article>{this.state.props.entry.Text}</article>
              <section><p><strong>Kategori:</strong> {this.state.props.entry.Category}</p></section>
          </section>
      )
  }
}

export default BlogPostDetail;
