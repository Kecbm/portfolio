import React from 'react';
import blogPosts from '../data/BlogPosts';
import '../css/BlogPosts.css';
import { useLanguage } from '../context/LanguageContext';

const BlogPosts = () => {
  const { language } = useLanguage();

  return (
    <div className="blogposts">
      <h1 className="h1Blog">BLOG POSTS</h1>
      <div className="blog-list">
        {
          blogPosts.map((post) => (
            <div key={ post[language].title } className={"card-blog"}>
              <img src={ post.image } alt={ post[language].title } className="img-card-blog"/>
              <h3 className="titleBlog">{ post[language].title }</h3>
              <button className="buttonBlog"><a href={ post.url } target="_blank" className="linkBlog" rel="noreferrer"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/0c0d11/external-link.png" alt="Read this article" title="Read this article" /></a></button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default BlogPosts;

