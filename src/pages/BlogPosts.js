import React, { Component } from 'react';
import blogPosts from '../data/BlogPosts';
import '../css/BlogPosts.css';

class BlogPosts extends Component {
  render() {
    return (
      <div className="blogposts">
        <h1 className="h1Blog">BLOG POSTS</h1>
        <div className="blog-list">
          {
            blogPosts.map((post) => (
              <div key={ post.title } className={"card-blog"}>
                {/* <img src={ post.location === "Br24" ? "https://br24.io/wp-content/uploads/2022/09/Logo-Site-Br24-222x59-1.png" : "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" } alt={ post.location } className="tag-location" /> */}
                <img src={ post.image } alt={ post.title } className="img-card-blog"/>
                <h3 className="titleBlog">{ post.title }</h3>
                {/* <p className="pBlog">{ post.description }</p> */}
                <button className="buttonBlog"><a href={ post.url } target="_blank" className="linkBlog" rel="noreferrer"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/0c0d11/overview-pages-1.png" alt="overview-pages-1"/></a></button>
                <div id="line"></div>
                <div id="footer-blog">
                  <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/calendar.png" alt="calendar"/>
                  <p className="date-blog">{post.date}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default BlogPosts;

