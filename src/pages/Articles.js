import React, { useState } from 'react';
import articles from '../data/Articles';
import '../css/BlogPosts.css';
import '../css/Projects.css';
import { useLanguage } from '../context/LanguageContext';
import Translations from '../locales/Translations';

const Articles = () => {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [selectedTag, setSelectedTag] = useState('todos');
  const { language } = useLanguage();

  const handleTagClick = (tags) => {
    setSelectedTag(tags[0]);

    if (tags.includes('todos')) {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) => 
        article.type && tags.some((tag) => article.type.includes(tag))
      );

      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="blogposts">
      <h1 className="h1Blog">{Translations[language].articleTitle}</h1>
      <div id="btn-filter">
        <button
          onClick={() => handleTagClick(['todos'])}
          className={selectedTag === 'todos' ? 'btn btn-tag-active' : 'btn  btn-tag'}
        >
          {Translations[language].articleBtn_1}
        </button>
        <button
          onClick={() => handleTagClick(['career'])}
          className={selectedTag === 'career' ? 'btn btn-tag-active' : 'btn  btn-tag'}
        >
          {Translations[language].articleBtn_2}
        </button>
        <button
          onClick={() => handleTagClick(['soft skills'])}
          className={selectedTag === 'soft skills' ? 'btn btn-tag-active' : 'btn  btn-tag'}
        >
          Soft Skills
        </button>
        <button
          onClick={() => handleTagClick(['algorithm'])}
          className={selectedTag === 'algorithm' ? 'btn btn-tag-active' : 'btn  btn-tag'}
        >
          {Translations[language].articleBtn_3}
        </button>
        <button
          onClick={() => handleTagClick(['business'])}
          className={selectedTag === 'business' ? 'btn btn-tag-active' : 'btn  btn-tag'}
        >
          {Translations[language].articleBtn_4}
        </button>
      </div>
      <div className="blog-list">
        {
          filteredArticles.map((post) => (
            <div key={ post[language].title } className="card-blog">
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

export default Articles;

