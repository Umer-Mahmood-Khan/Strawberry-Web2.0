// src/components/Gallery.js
import React from 'react';
import './Gallery.css';
// Import images
import typeone from '../assets/269.png';
import typetwo from '../assets/1975.png';
import Benadice from '../assets/Benadice.png';
import Fortuna from '../assets/Fortuna.png';
import Radiance from '../assets/Radiance.png';
import Sanandreas from '../assets/Sanandreas.png';

const Gallery = () => {
    // Array of strawberries with their image and alternative title
    const strawberries = [
      { name: '269', image: typeone, alt: 'Numbered variety, limited information. Uncover the secrets of this mysterious berry.' },
      { name: '1975', image: typetwo, alt: 'Historical variety, unique flavor profile. A taste of the past, rediscover its charm' },
      { name: 'Benadice', image: Benadice, alt: 'Everbearing sweetness, abundant harvests. Enjoy juicy berries all season long.' },
      { name: 'Fortuna', image: Fortuna, alt: 'Small, tart berry, dark red hue. Bold and tangy, ideal for jams and desserts.' },
      { name: 'Radiance', image: Radiance, alt: 'Medium-sized, juicy berry, vibrant red. Bursting with flavor, perfect for snacking.' },
      { name: 'Sanandreas', image: Sanandreas, alt: ' Large, sweet berry, deep red color. A taste of California sunshine in every bite.' },
    ];
  
    return (
      <section className="gallery">
        <div className="gallery-grid">
          {strawberries.map((strawberry, index) => (
            <div className="gallery-item" key={index}>
              <img src={strawberry.image} alt={strawberry.name} />
              <h3>{strawberry.name}</h3>
              <span className="alt-title">{strawberry.alt}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Gallery;
