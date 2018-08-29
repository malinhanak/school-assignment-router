import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li>link</li>
        <li>link</li>
      </ul>
    </nav>
    <article>Welcome to my blog</article>
  </header>
)
export default Header;
