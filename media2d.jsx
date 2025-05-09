// File: src/components/Media2D.jsx
import React, { useState, useRef } from 'react';
import './Media2D.css';

const bgImages = [
  'Images/Backgrounds/Background 1.jpg',
  'Images/Backgrounds/Background 2.jpg',
  'Images/Backgrounds/Background 4.jpg',
  'Images/Backgrounds/Background 3.jpg',
  'Images/Backgrounds/Background 6.jpg',
  'Images/Backgrounds/Background 5.jpg',
  'Images/Backgrounds/Background 7.jpg',
  'Images/Backgrounds/Background 8.jpg',
  'Images/Backgrounds/Background 9.jpg',
  'Images/Backgrounds/Background 10.jpg',
  'Images/Backgrounds/Background 11.jpg',
  'Images/Backgrounds/Background 12.jpg',
  'Images/Backgrounds/Background 13.jpg',
  'Images/Backgrounds/Background 14.jpg',
  'Images/Backgrounds/Background 15.jpg',
  'Images/Backgrounds/Background 16.jpg',
  'Images/Backgrounds/Background 17.jpg',
  'Images/Backgrounds/Background 18.jpg',
  'Images/Backgrounds/Background 19.jpg',
  'Images/Backgrounds/Background 20.jpg',
  'Images/Backgrounds/Background 21.jpg'
];


const items = [
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Abstract Charcoal.jpg', desc: 'Charcoal sketch on paper', size: 'large' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Creature.jpg', desc: 'Ink creature study', size: 'medium' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Evil Abstract Bear.jpg', desc: 'Abstract bear illustration', size: 'small' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Eyeball.jpg', desc: 'Surreal eyeball composition', size: 'medium' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Large Abstract with Collage.jpg', desc: 'Mixed media collage', size: 'large' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Little guy.jpg', desc: 'Portrait sketch', size: 'small' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Love is Love.jpg', desc: 'Valentine-themed doodle', size: 'small' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Monster City.jpg', desc: 'Cityscape with monsters', size: 'medium' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Mouth.jpg', desc: 'Anatomical mouth study', size: 'large' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Mushroom drawings, 2022.jpg', desc: 'Mushroom botanical sketches', size: 'medium' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Painting made for friend as a gift, 2022.jpg', desc: 'Commemorative gift painting', size: 'small' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Paper Abstract 1.jpg', desc: 'Paper collage abstract I', size: 'small' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Paper Abstract 2.jpg', desc: 'Paper collage abstract II', size: 'medium' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Repurposed_Sign.jpg', desc: 'Repurposed sign painting', size: 'large' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Runic Woods.jpg', desc: 'Runic wood pattern', size: 'small' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Spraypaint Space 1.jpg', desc: 'Spraypaint galaxy I', size: 'medium' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Spraypaint Space 2.jpg', desc: 'Spraypaint galaxy II', size: 'small' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Untitled Abstract 1.jpg', desc: 'Untitled abstract I', size: 'large' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Untitled Abstract 2.jpg', desc: 'Untitled abstract II', size: 'medium' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Untitled Abstract 3.jpg', desc: 'Untitled abstract III', size: 'small' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Untitled Abstract 4.jpg', desc: 'Untitled abstract IV', size: 'medium' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Untitled Abstract 5.jpg', desc: 'Untitled abstract V', size: 'small' },
  { src: 'C:/Users/demet/OneDrive/Documents/Site/Images/Website Art/Complete Art/Painting - Drawing/Watercolor Tree.jpg', desc: 'Watercolor tree study', size: 'large' }
];

export default function Media2D() {
  const [overlayItem, setOverlayItem] = useState(null);
  const timerRef = useRef();

  const handleMouseEnter = (item) => {
    timerRef.current = setTimeout(() => setOverlayItem(item), 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setOverlayItem(null);
  };

  const pick = bgImages[Math.floor(Math.random() * bgImages.length)];
  document.body.style.backgroundImage = `url('${pick}')`;

  return (
    <div className="media2d-container">
      <header className="page-header">
        <h2>2-D Media</h2>
        <div className="placeholder">Placeholder Text</div>
      </header>
      <nav className="tab-nav">
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/2d">2-D Media</a>
        <a href="/mixed">Mixed Media</a>
        <a href="/sculptural">Sculptural</a>
        <a href="/functional">Functional</a>
        <a href="/projects">Class Projects</a>
      </nav>
      <section className="scrapbook">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`scrap-item ${item.size}`}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={item.src} alt={`Artwork ${idx + 1}`} />
          </div>
        ))}
      </section>

      <div id="overlay" className={overlayItem ? 'show' : ''} onMouseLeave={handleMouseLeave}>
        <div id="overlay-content">
          <img id="overlay-img" src={overlayItem?.src} alt="Expanded Artwork" />
          <div id="overlay-caption">{overlayItem?.desc}</div>
        </div>
      </div>
    </div>
  );
}
