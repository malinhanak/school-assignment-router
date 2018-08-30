import React, { Component } from 'react';
import GET_POST from './logic/getPost';

class BlogPostDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
        post: null
    }
  }

  componentDidMount() {
    const id = this.props.topic;
    GET_POST(id)
    .then((post) => {
        this.setState({
            post,
        });
    })
  }

  render() {
      const post = this.state.post;
      const topic = this.props.topic;
      if (!post) {
          return ( <div> loading {topic}</div> );
      }
      return (
          <section>
              <h1>{post.Title}</h1>
              <section>
                  <span><strong>Författare:</strong> {post.Author} | <strong>Datum:</strong> {post.Date}</span>
              </section>
              <article>{post.Entry}</article>
              <section><p><strong>Kategori:</strong> {post.Category}</p></section>
          </section>
      )
  }
}

export default BlogPostDetail;