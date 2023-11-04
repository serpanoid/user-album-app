import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './List.css';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [albumId]);

  return (
    <div className="list-container">
      <h1 className="list-title">Photo List</h1>
      <div className="item-cards">
        {photos.map(photo => (
          <div key={photo.id} className="item-card">
            <img src={photo.url} alt={photo.title} />
          </div>
        ))}
      </div>
      <Link to={`/albums/${albumId}`} className="back-button">
        Album List
      </Link>
    </div>
  );
};

export default PhotoList;
