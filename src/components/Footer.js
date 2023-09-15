import React, { useState, useEffect } from 'react';
import '../css/Footer.css';

const Footer = () => {
  const icons = ['🤠', '🌵', '🐎', '🪗', '🪨', '🫀', '☀️'];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [icons.length]);

  return (
    <footer>
      <h4 id="text-footer">Desenvolvido com 
        {' '}
        {icons.map((icon, index) => (
            <span
              key={index}
              style={{ display: index === currentIconIndex ? "inline-block" : "none" }}
              className={`icon ${index === currentIconIndex ? 'beat-animation' : ''}`}
            >
              {icon}
            </span>
        ))}
        {' '}
      por
        {' '}
        <span id="name-footer">Klecianny Melo</span>
      </h4>
    </footer>
  );
}

export default Footer;