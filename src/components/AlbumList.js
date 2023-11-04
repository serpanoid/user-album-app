import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './List.css';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userId]);

  return (
    <div className="list-container">
      <h1 className="list-title">Album List</h1>
      <div className="item-cards">
        {albums.map(album => (
          <div key={album.id} className="item-card">
            <h2 className="item-title">{album.title}</h2>
            <Link to={`/photos/${album.id}`} className="item-action-button">
              View Photos
            </Link>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">
        User List
      </Link>
    </div>
  );
};

export default AlbumList;
