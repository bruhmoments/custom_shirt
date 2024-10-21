import React, { useState } from 'react';
import ShirtPreview from './components/ShirtPreview';
import ImageUploader from './components/ImageUploader';
import shirtImage from './assets/shirt.jpg'

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Custom Shirt Preview</h1>
      <ImageUploader onImageUpload={setUploadedImage} />
      <ShirtPreview shirtImage={shirtImage} uploadedImage={uploadedImage} />
    </div>
  );
};

export default App;
