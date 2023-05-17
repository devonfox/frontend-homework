import React, { useState } from 'react';
import axios from 'axios';
import Character from '../components/Character';

const Search = () => {
  const [searchParam, setSearchParam] = useState('');
  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const onSearch = async () => {
    try {
      const response = await axios.get(
        `https://thronesapi.com/api/v2/characters`,
      );
      const charactersData = response.data;

      if (searchParam.trim() === '') {
        setCharacters([]);
        setErrorMessage('');
      } else {
        const filtered = charactersData.filter((character) =>
          character.fullName.toLowerCase().includes(searchParam.toLowerCase()),
        );
        setCharacters(filtered);

        if (filtered.length === 0) {
          setErrorMessage('No characters found');
        } else {
          setErrorMessage('');
        }
      }
    } catch (error) {
      setCharacters([]);
      setErrorMessage('Error occurred.');
    }
  };

  return (
    <>
      <div className="text-center display-5 my-4">Search Characters</div>
      <div className="text-center mt-3 d-flex justify-content-center">
        <input
          type="text"
          value={searchParam}
          className="form-control w-25 mb-2 mr-2"
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter character name"
        />
        <button className="btn btn-dark mb-2 mx-2" onClick={onSearch}>
          Search
        </button>
      </div>
      {errorMessage && (
        <div className="text-center text-danger mt-4">{errorMessage}</div>
      )}
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </>
  );
};

export default Search;
