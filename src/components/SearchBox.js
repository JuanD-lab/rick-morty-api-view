import React, {useEffect, useState} from 'react'
import LocationContainer from './LocationContainer'
import '../App.css';
import axios from 'axios'

function SearchBox() {
  const [infoLocation, setInfoLocation] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [query, setQuery] = useState(Math.floor(Math.random()*101))
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    
    const call = axios(`https://rickandmortyapi.com/api/location/${query}`)
    call.then((response) => {
      setInfoLocation([response.data.name, response.data.dimension, response.data.type, response.data.residents.length])
      setCharacters(response.data.residents.slice(0,10))
    })
  }, [query])

  const handleChange = (value) => {
    setQuery(value)
  }
  
return (
    <div className="SearchBox">
      <input onChange={(e) => setSearchTerm(e.target.value)} type="text" required/>
      <button onClick={() => handleChange(searchTerm)}>Search</button>
      <LocationContainer  characters={characters} arrayInfo={infoLocation}/>
    </div>
  );
}

export default SearchBox;