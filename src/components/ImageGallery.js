// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
      setImages((prevImages) => [...prevImages, ...response.data]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt={image.title}
          style={{ width: '60%', height: 'auto', marginBottom: '10px' }}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
