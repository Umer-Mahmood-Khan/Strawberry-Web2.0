import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Model.css';
import logo from '../assets/upload.png'; // Ensure the path is correct

const Model = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [openSection, setOpenSection] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const predefinedTexts = {
    description: "This is a description of the strawberry. It contains various details about its appearance, taste, and more.",
    recipe: "This is a recipe involving strawberries. It includes ingredients, instructions, and tips for preparation.",
    characteristics: "These are the characteristics of the strawberry. It covers aspects like color, size, texture, and flavor.",
    growingConditions: "These are the growing conditions required for the strawberry. It includes information on soil, climate, and care."
  };

  return (
    <section className="model">
      <div className="upload-container" {...getRootProps()}>
        <input {...getInputProps()} />
        {uploadedImage ? (
          <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
        ) : (
          <div className="upload-placeholder">
            <img src={logo} alt="Upload Logo" className="upload-logo" />
            <p>Drag & Drop or select files from device</p>
          </div>
        )}
      </div>
      <div className="dropdowns">
        <div className="dropdown">
          <button onClick={() => toggleSection('description')}>
            Description
          </button>
          {openSection === 'description' && (
            <div className="dropdown-content">{predefinedTexts.description}</div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => toggleSection('recipe')}>
            Recipe
          </button>
          {openSection === 'recipe' && (
            <div className="dropdown-content">{predefinedTexts.recipe}</div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => toggleSection('characteristics')}>
            Characteristics
          </button>
          {openSection === 'characteristics' && (
            <div className="dropdown-content">{predefinedTexts.characteristics}</div>
          )}
        </div>
        <div className="dropdown">
          <button onClick={() => toggleSection('growingConditions')}>
            Growing Conditions
          </button>
          {openSection === 'growingConditions' && (
            <div className="dropdown-content">{predefinedTexts.growingConditions}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Model;
