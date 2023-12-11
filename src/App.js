// src/App.js
import React from 'react';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite Scroll Gallery</h1>
      </header>
      <main>
        <ImageGallery />
      </main>
    </div>
  );
}

export default App;
