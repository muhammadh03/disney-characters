import './App.css';
import React, { useState, useEffect } from'react';

function App() {

  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);

  const getCharacters = async () => {
    const response = await fetch(`https://api.disneyapi.dev/character?pageSize=5&page=${page}`);
    const {data} = await response.json();
    setCharacters(data);
  };

  useEffect(() => {
    getCharacters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div 
      className="App" 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh',
        }}>
        {characters.map(({name, imageUrl}) => (
          <img key = {name} src={imageUrl} alt={name} style={{margin: '10px'}} />
        ))}
      </div>
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        }}
      >
      <button disabled={page === 1} onClick={() => {
        setPage(page - 1);
      }}>Prev</button>
      <button onClick={() => {
        setPage(page + 1);
      }}>Next</button>
      </div>
    </>
  );
}

export default App;
