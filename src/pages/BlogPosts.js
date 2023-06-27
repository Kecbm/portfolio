import React, { Component } from 'react';
import blogPosts from '../data/BlogPosts';
import '../css/BlogPosts.css';

// const imgStyle = {
//   height: '150px',
//   width: '150px',
//   marginTop: '0px',
// };

class BlogPosts extends Component {
  render() {
    return (
      <div className="blogposts">
        <h1 className="h1Blog">BLOG POSTS</h1>
        <div className="blog-list">
          {
            blogPosts.map((project) => (
              <div key={ project.title } className="card-blog">
                {/* <img src={ project.image } alt={ project.title } style={ imgStyle }/> */}
                <h3 className="titleBlog">{ project.title }</h3>
                <p className="pBlog">{ project.description }</p>
                <button className="buttonBlog"><a href={ project.url } target="_blank" className="linkBlog">ACESSE</a></button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default BlogPosts;

