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
            blogPosts.map((post) => (
              <div key={ post.title } className={post.location === "Br24" ? "card-blog blog-br24" : "card-blog blog-devto"}>
                {/* <img src={ post.location === "Br24" ? "https://br24.io/wp-content/uploads/2022/09/Logo-Site-Br24-222x59-1.png" : "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" } alt={ post.location } className="tag-location" /> */}
                <img src={ post.image } alt={ post.title } className="img-card-blog"/>
                <h3 className="titleBlog">{ post.title }</h3>
                <p className="pBlog">{ post.description }</p>
                <button className="buttonBlog"><a href={ post.url } target="_blank" className="linkBlog" rel="noreferrer">LER AGORA</a></button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default BlogPosts;

