import React from 'react';
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import BlogPosts from './pages/BlogPosts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/projects" element={ <Projects /> } />
          <Route exact path="/blogposts" element={ <BlogPosts /> } />
          <Route exact path="/contact" element={ <Contact /> } />
          <Route path="*" element={ NotFound } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
